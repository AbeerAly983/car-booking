<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user_role    = Role::create(['name' => 'user']);
        $company_role = Role::create(['name' => 'company']);

        $user_permissions   = Permission::create(['name' => 'cars.book']);
        $company_permission = Permission::create(['name' => 'docs.add']);

        $user_role->givePermissionTo([$user_permissions]);
        $company_role->givePermissionTo([$company_permission]);

    }
}
