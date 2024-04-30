<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNameToAdminsTable extends Migration
{public function up()
    {
        Schema::table('admins', function (Blueprint $table) {
            $table->string('name'); // Add this line to define the 'name' column
        });
    }

    public function down()
    {
        Schema::table('admins', function (Blueprint $table) {
            $table->dropColumn('name'); // If you need to rollback, this line will remove the 'name' column
        });
    }
}
