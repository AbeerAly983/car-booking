<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDataColumnToDateOfRentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('date_of_rents', function (Blueprint $table) {
            $table->string('price')->default(0);
            $table->string("Subscription_period");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('date_of_rents', function (Blueprint $table) {
            Schema::dropIfExists('date_of_rents');
        });
    }
}
