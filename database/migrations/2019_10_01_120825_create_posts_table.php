<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title', 255)->nullable();
            $table->string('slug', 255)->nullable();
            $table->text('shortdescription')->unllable();
            $table->text('fulldescription', 255)->unllable();
            $table->string('author')->nullable();
            $table->string('image')->unllable();
            $table->string('other_images')->nullable();
            $table->string('video_url', 100)->nullable();
            $table->string('order', 10);
            $table->string('feature_product', 10);
            $table->string('platform', 10)->nullable();
            $table->boolean('status')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
