<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConnectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('connections', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('episode_id');
            $table->unsignedBigInteger('entry_id');
            $table->unsignedBigInteger('out_id');
            $table->json('meta');
            $table->timestamps();

            $table->foreign('episode_id')
                ->references('id')
                ->on('episodes')
                ->onDelete('cascade');

            $table->foreign('entry_id')
                ->references('id')
                ->on('videos')
                ->onDelete('cascade');
                
            $table->foreign('out_id')
                ->references('id')
                ->on('videos')
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
        Schema::dropIfExists('connections');
    }
}
