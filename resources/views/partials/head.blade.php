<head>
    {{-- unicode text --}}
    <meta charset="UTF-8">

    {{-- responsive and compatible view --}}
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    {{-- meta data site --}}
    <meta name="description" content="ATAMOTS adalah website monitoring kapasitas tempat sampah anda">
    <meta name="author" content="Rochmad Nurul Fahmi">
    <meta name="keyword" content="atamots, ATAMOTS, IoT, tempat sampah berbasis IoT">

    {{-- visual element on head tag --}}
    <title>{{ config('app.name') }}</title>

    <!-- Fonts and icons -->
    <script src="{{ asset('assets/js/plugins/webfont/webfont.min.js') }}"></script>
    <script>
        WebFont.load({
            google: {
                "families": ["Lato:300,400,700,900"]
            },
            custom: {
                "families": ["Flaticon", "Font Awesome 5 Solid", "Font Awesome 5 Regular", "Font Awesome 5 Brands",
                    "simple-line-icons"
                ],
                urls: ["{{ asset('assets/css/core/fonts.min.css') }}"]
            },
            active: function() {
                sessionStorage.fonts = true;
            }
        });
    </script>

    {{-- CSS Core --}}
    <link rel="stylesheet" href="{{ asset('assets/css/core/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/core/atlantis2.css') }}">

    {{-- CSS Plugins --}}
    @yield('css_plugins')

    {{-- CSS Custom --}}
    @yield('css_custom')

</head>
