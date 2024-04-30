<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1,   shrink-to-fit=no">
    <title>Multiple Image upload</title>
</head>
<body>
<div>
    <h3>Upload a Images</h3>
    <hr>
    <form method="POST" action="{{ url('upload-multiple-image-preview') }}" enctype="multipart/form-data" >
        {{ csrf_field() }}

        <div >
            <br>
            <br>
            <label>type</label>
            <input type="text" name="type" placeholder="Enter type">
            <br>
            <br>
            <label>model</label>
            <input type="text" name="model" placeholder="Enter model">
            <br>
            <br>
            <label>first_release</label>
            <input type="text" name="first_release" placeholder="Enter first_release">
            <br>
            <br>
            <label>price_rent</label>
            <input type="text" name="price_rent" placeholder="Enter price_rent">
            <br>
            <br>
            <label>governorate</label>
            <input type="text" name="governorate" placeholder="Enter governorate">
            <br>
            <br>
            <label>city</label>
            <input type="text" name="city" placeholder="Enter city">
            <br>
            <br>
            <label>address</label>
            <input type="text" name="address" placeholder="Enter address">
            <br>
            <br>
            <label>phone</label>
            <input type="text" name="phone" placeholder="Enter phone">
            <br>
            <br>
</div>
        <div >
            <label>Choose Images</label>
            <input type="file" name="images[]" id="images" placeholder="Choose images" multiple >
        </div>
        <hr>
        <button type="submit" >Submit</button>
    </form>
</div>
</body>
</html>
