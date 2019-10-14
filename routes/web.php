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

    Route::get('posts',                             ['as' => 'posts',                     'uses' => 'PostsController@index']);
    Route::get('addposts',                         ['as' => 'addposts',                     'uses' => 'PostsController@addposts']);
    Route::post('posts/store',                        ['as' => 'posts.store',                    'uses' => 'PostsController@store']);
    Route::get('posts/edit/{id}',                  ['as' => 'posts.edit',                    'uses' => 'PostsController@edit']);
    Route::post('posts/update/{id}',                ['as' => 'posts.update',                    'uses' => 'PostsController@update']);
    Route::get('posts/delete/{id}',                ['as' => 'posts.delete',                    'uses' => 'PostsController@delete']);

    Route::get('platform',                             ['as' => 'platform',                     'uses' => 'PlatformController@index']);
    Route::get('addplatform',                         ['as' => 'addplatform',                     'uses' => 'PlatformController@addposts']);
    Route::post('platform/store',                        ['as' => 'platform.store',                    'uses' => 'PlatformController@store']);
    Route::get('platform/edit/{id}',                  ['as' => 'platform.edit',                    'uses' => 'PlatformController@edit']);
    Route::post('platform/update/{id}',                ['as' => 'platform.update',                    'uses' => 'PlatformController@update']);
    Route::get('platform/delete/{id}',                ['as' => 'platform.delete',                    'uses' => 'PlatformController@delete']);
});
