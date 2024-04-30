<?php

namespace App\Http\Traits;

use Illuminate\Http\Request;

trait UploadImageTrait
{
    public function UploadImage(Request $request,$foldername){
        $insert=[];
        if ($request->hasfile('photos')) {
            foreach ($request->file('photos') as $key => $file) {
                $name = $file->getClientOriginalName();
                $path=$file->storeAs($foldername,$name,'path1');
                $insert[$key]['photo'] = $foldername.'/'.$name;
            }
        }
        return $insert;
    }
    public function UploadImage1(Request $request,$foldername,$fileName){

        $image=$request->file($fileName)->getClientOriginalName();
        $path=$request->file($fileName)->storeAs($foldername,$image,'path1');
        return $foldername.'/'.$image;
    }
}
