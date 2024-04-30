<?php

use App\Http\Controllers\admin\AuthAdminController;
use App\Http\Controllers\admin\DataOfCarsController;
use App\Http\Controllers\admin\forgotPasswordController;
use App\Http\Controllers\admin\OtpController;
use App\Http\Controllers\admin\resetPasswordController;
use App\Http\Controllers\admin\update_profileController;

Route::prefix('admin')->group(function(){
    Route::middleware('guest:admin')->group(function(){
        Route::controller(AuthAdminController::class)->group(function(){
            Route::post('login', 'login');
            
        });
        
        Route::post('resend_otp', [OtpController::class, 'resend']);
        Route::post('/forgotPassword', [ForgotPasswordController::class, 'forgot_password']);
        Route::post('/resetPassword', [resetPasswordController::class, 'reset_password']);
    });
    Route::controller(AuthAdminController::class)->group(function (){
        Route::get('profile',  'profile');
        Route::post('logout', 'logout');
    });
    Route::controller(update_profileController::class)->group((function(){
        Route::get('edit_admin','edit');
        Route::post('update_admin','update_profile');
        Route::post('change_admin_password','change_password');

    }));
    Route::controller(DataOfCarsController::class)->group(function (){
        Route::get('cars_wait_approval','cars_wait_approval');
        Route::get('delete_car/{id}','delete_car');
        Route::get('approve_car/{id}','approve_car');

        Route::get('count_users','count_users');
        Route::get('count_users/all_users','all_users');
        Route::get('count_users/companies','companies');
        Route::get('count_users/users','users');

        Route::get('count_cars','count_cars');
        Route::get('count_cars/all_cars','all_cars');
        Route::get('count_cars/disable_cars','disable_cars');
        Route::get('count_cars/cars_wait_approve','cars_wait_approve');
        Route::get('count_cars/active_cars','active_cars');
        Route::get('count_cars/not_pay_cars','not_pay_cars');


        Route::get('count_subscription','count_subscription');
        Route::get('count_subscription/all_subscription','all_subscription');
        Route::get('count_subscription/one_month_subscription','one_month_subscription');
        Route::get('count_subscription/three_month_subscription','three_month_subscription');
        Route::get('count_subscription/one_year_subscription','one_year_subscription');

        Route::get('num_subscription_paid','num_subscription_paid');
        Route::get('num_subscription_paid/all_subscription_paid','all_subscription_paid');
        Route::get('num_subscription_paid/subscription_paid_today','subscription_paid_today');
        Route::get('num_subscription_paid/subscription_paid_this_month','subscription_paid_this_month');
        Route::get('num_subscription_paid/subscription_paid_this_year','subscription_paid_this_year');

        Route::get('sum_subscription','sum_subscription');

        Route::get('end_subscription','end_subscription');
        Route::get('end_subscription/subscription_end_this_month','subscription_end_this_month');
        Route::get('end_subscription/subscription_end_today','subscription_end_today');

        Route::get('AnnualProfits','AnnualProfits');
        Route::get('MonthlyProfits','MonthlyProfits');
        Route::get('Total_rent_car','Total_rent_car');
        Route::get('Annual_rent_car','Annual_rent_car');
        Route::get('users_added_this_year','users_added_this_year');


    });

});
