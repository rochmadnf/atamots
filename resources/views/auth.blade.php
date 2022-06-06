<!DOCTYPE html>
<html lang="id">
@include('partials.head')

<body class="login">
    {{-- content --}}
    @yield('content')

    @include('partials.scripts')
    <script src="{{ mix('js/main.js') }}"></script>
</body>

</html>
