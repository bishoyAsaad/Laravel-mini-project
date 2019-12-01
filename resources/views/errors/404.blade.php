<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Not Found Custom Page</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/css/bootstrap.min.css" integrity="sha384-SI27wrMjH3ZZ89r4o+fGIJtnzkAnFs3E4qz9DIYioCQ5l9Rd/7UAa8DHcaL8jkWt" crossorigin="anonymous">
    <style>
        #home {
            bottom: 0;
        }
        body {
            background-size: cover;
            background-position: center;
            background-image: url({{asset('images/404_img.jpg')}});
        }
    </style>
</head>
<body class="position-relative h-100">
    <div class="col-12 text-center pt-5">
        <div class="pt-5">
            <h1 class="mt-5">It appears that the page you are looking for does not exist</h1>
        </div>
    </div>

    <div id="home" class="col-12 text-center p-5 position-absolute">
        <h3 class="p-5 text-white d-flex justify-content-center">
            <a href="{{route('main')}}" class="rounded p-4 btn btn-outline-light">
                <h3 class="m-0">Get back Home</h3>
            </a>
        </h3>
    </div>
</body>
</html>