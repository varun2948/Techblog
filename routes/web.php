<?php

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

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();

Route::view('/{path?}', 'app');



// Route::get('/home', 'HomeController@index')->name('home');
// Route::get('login',                           ['as' => 'main',                  'uses' => 'MainController@index']);
// Route::get('/admin/dashboard',                             ['as' => 'dashboard',                     'uses' => 'MainController@index']);
Route::group(['prefix' => 'admin/', 'as' => 'admin.', 'middleware' => 'auth'], function () {

    Route::get('',                             ['as' => 'dashboard',                     'uses' => 'MainController@index']);
    Route::get('dashboard',                             ['as' => 'dashboard',                     'uses' => 'MainController@index']);
});
