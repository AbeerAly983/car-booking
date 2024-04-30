<?php

use App\Http\Controllers\CarController;
use App\Http\Controllers\user\AuthController;
use App\Http\Controllers\user\forgotPasswordController;
use App\Http\Controllers\user\OtpController;
use App\Http\Controllers\user\resetPasswordController;
use App\Http\Controllers\user\VerifyEmailController;
use App\Http\Controllers\user\UpdateProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(AuthController::class)->group(function(){
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::get('profile',  'profile');
});

Route::post('resend_otp', [OtpController::class, 'resend']);
Route::post('VerifyEmail', [VerifyEmailController::class, 'verify_email']);
Route::post('forgotPassword', [forgotPasswordController::class, 'forgot_password']);
Route::post('resetPassword', [resetPasswordController::class, 'reset_password']);
Route::get('/checkout', 'App\Http\Controllers\StripeController@checkout')->name('checkout');
Route::post('/session', 'App\Http\Controllers\StripeController@session')->name('session');
Route::post('/makePayment', 'App\Http\Controllers\StripeController@makePayment')->name('makePayment');
Route::get('/success/{id}', 'App\Http\Controllers\StripeController@success')->name('success');
Route::controller(UpdateProfileController::class)->group((function(){
    Route::get('edit_user','edit');
    Route::post('update_user','update');
    Route::post('change_user_password','change_password');

}));
Route::controller(CarController::class)->group(function(){

    Route::get('cars', 'index');
    Route::get('carDetails/{id}','details');
    Route::get('users_car','users_car');
    Route::get('companies_car','companies_car');
    Route::get('value','value');
    Route::post('filter','filter');
    Route::post('rent_car','rent_car');
    Route::get('date/{id}','Booked_dates');
    Route::get('disable/{id}','disable');
    Route::get('cars/edit/{id}' ,'edit');
    Route::post('cars/update/{id}','update');
    Route::get('delete_rent/{id}','delete_rent');
    Route::get('list_request_wait_approval/{id}',  'list_request_wait_approval');
    Route::get('list_car_rent/{id}',  'list_car_rent');
    Route::get('accept_rent/{id}','accept_rent');
    Route::get('delete_request/{id}','delete_request');
    Route::get('delete_photo/{id}','delete_photo');
    Route::get('add_photo/{id}','add_photo');

});
Route::middleware('auth:api')->group(function(){
    Route::controller(CarController::class)->group(function(){
        Route::post('addCar',  'store');
        Route::get('wait',  'request_wait_approval');
        Route::get('rent',  'car_rent');
        Route::get('user_cars',  'cars');
        Route::get('MyBooking','MyBooking');
        Route::get('MyBooking_wait_approve','MyBooking_wait_approve');



    });

});
require __DIR__.'/admin.php';
