<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('episode_id');
            $table->unsignedBigInteger('project_id');
            $table->string('name');
            $table->string('filename_horiz');
            $table->string('filename_vert')->nullable();
            $table->string('url_horizontal');
            $table->string('url_vertical')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->json('meta');
            $table->timestamps();

            $table->foreign('project_id')
                ->references('id')
                ->on('projects')
                ->onDelete('cascade');

            $table->foreign('episode_id')
                ->references('id')
                ->on('episodes')
                ->onDelete('cascade');

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('videos');
    }
}
