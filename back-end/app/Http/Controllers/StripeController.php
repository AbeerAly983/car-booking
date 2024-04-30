<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Car;
use App\Models\DateOfRent;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Stripe\Charge;
use Stripe\Stripe;

// added this 
use Stripe\PaymentIntent;
use Illuminate\Http\Request as IlluminateRequest;

class StripeController extends Controller
{
    public function checkout()
    {
        return Response()->json(['message' => 'Payment Failed']);
    }

    public function session(Request $request)
    {
        \Stripe\Stripe::setApiKey(config('stripe.sk'));

        $type = $request->get('type');
        $model = $request->get('model');
        $id = $request->get('id');
        $price = $request->get('price');
        $time = $request->get('time');
        $total = $price.''."00";

        $session = \Stripe\Checkout\Session::create([
            'line_items'  => [
                [
                    'price_data' => [
                        'currency'     => 'EGP',
                        'product_data' => [
                            "name" => $type.''.$model,
                        ],
                        'unit_amount'  => $total,
                    ],
                    'quantity'   => 1,

                ],

            ],
            'mode'        => 'payment',
            'success_url' => route('success',['id' => $id,'time'=>$time,'price'=>$price]),
            'cancel_url'  => route('checkout'),
        ]);


        return redirect()->away($session->url);
    }
    
    public function makePayment(Request $request)
    {
        \Stripe\Stripe::setApiKey(config('stripe.sk'));
    
        $paymentMethod = $request->paymentMethod;
        $type = $request->get('type');
        $model = $request->get('model');
        $id = $request->get('id');
        $price = $request->get('price');
        $time = $request->get('time');
        $total = $price . '00';
    
        try {
            $paymentIntent = PaymentIntent::create([
                'amount' => $total,
                'currency' => 'EGP',
                'payment_method' => $paymentMethod,
                'description' => $type.''.$model,
                'confirm' => true,
                'return_url' => route('success', ['id' => $id, 'time' => $time, 'price' => $price]),
            ]);
    
            return $this->success(['id' => $id, 'time' => $time, 'price' => $price]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()]);
        }
    }
    

public function success(array $requestData)
{
    $request = new Request($requestData);

    $car = Car::find($request->id);
    $car->status = true;
    $car->save();

    $currentDateTime = Carbon::now();
    $newDateTime = Carbon::now()->addDays(30);

    $product = DateOfRent::create([
        'start_date' => $currentDateTime,
        'end_date' => $newDateTime,
        'car_id' => $request->id,
        'price' => $request->price,
        'Subscription_period' => $request->time,
    ]);

    return response()->json(['message' => 'Payment completed successfully']);
}
}
