<?php

use App\Http\Controllers\CarController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('cars', [CarController::class, 'index']);
Route::controller(\App\Http\Controllers\CarController::class)->group(function(){
    Route::get('upload-multiple-image-preview', 'index');

    Route::post('upload-multiple-image-preview',  'store');

});
//Route::get('addProduct', 'CarController@index')->name('products.uploadproduct');
//Route::post('addProduct', 'CarController@store')->name('products.uploadproduct');
