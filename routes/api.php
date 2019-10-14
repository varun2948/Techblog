<?php

use Illuminate\Http\Request;

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

Route::get('posts', 'PostsController@index_api');
Route::post('posts', 'PostsController@store_api');

Route::get('platform', 'PlatformController@index_api');
Route::post('platform', 'PlatformController@store_api');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
