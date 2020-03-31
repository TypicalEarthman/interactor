<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Interactor</title>
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v5.12.1/js/all.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
        <!-- Third party plugin CSS-->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" rel="stylesheet" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="{{ asset('css/styles.css') }}" rel="stylesheet"/>
        <!-- Yandex.Metrika counter -->
        <script type="text/javascript" >
           (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
           m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
           (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        
           ym(61513768, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
           });
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/61513768" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        <!-- /Yandex.Metrika counter -->
    </head>
    <body id="page-top">
        <!-- Masthead-->
        <header class="masthead smallstep_screenshot">
            <div class="container h-100">
                <div class="row h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-10 align-self-end">
                        <h1 class="text-uppercase text-white font-weight-bold wrap-none">
                            Top 5 emotional short movies to watch
                        </h1>
                        <hr class="divider my-4" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white font-weight-light mb-5">We've made a list of 5 must watch short movies with touching stories just for you.</p>
                        <p class="text-white font-weight-light mb-5">If you're happy with us, you can join <a href="https://t.me/interactor">our Telegram chat</a></p>
                        <a href="#movies">
                            <i class="fas fa-4x fa-angle-double-down text-primary mb-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <!-- Movies section-->
        <section class="page-section" id="movies">
            <div class="container">
                <div class="column">
                    <div>
                        <div class="mt-5">
                            <img src="{{ asset('images/sintel.jpg') }}" class="movie_pic mb-4"/>
                            <h3 class="h4 mb-2">Sintel</h3>
                            <p class="text-muted mb-0">Sintel, also known as the Durian Movie Project from the Blender Foundation (from 2010) is a fantastic example of the kind of animation and storytelling the open source community is capable of. You will be amazed with stunning backgrounds and the amount of detail in props. By the end of this film you will be questioning why so many two hour movies put in theaters these days can’t make you feel like this one did!
                            </p>
                        </div>
                    </div>
                    <div>
                        <div class="mt-5">
                            <img src="{{ asset('images/blue.jpg') }}" class="movie_pic mb-4"/>
                            <h3 class="h4 mb-2">Love, Death & Robots - Zima blue</h3>
                            <p class="text-muted mb-0">some desc here</p>
                        </div>
                    </div>
                    <div>
                        <div class="mt-5">
                            <img src="{{ asset('images/toyland.jpg') }}" class="movie_pic mb-4"/>
                            <h3 class="h4 mb-2">Toyland </h3>
                            <p class="text-muted mb-0">Toyland is a film that works so brilliantly that it managed to be powerful, thought-provoking and even gut-wrenching. With sparse dialogue, director Jochen Alexander Freydank keeps us hooked throughout this superb short film. This harrowing, Oscar-nominated live-action short unfurls in 1942 Germany, where a mother dupes her son into believing that a group of Jewish neighbors are being taken to a fantasy world called Toyland</p>
                        </div>
                    </div>
                    <div>
                        <div class="mt-5">
                            <img src="{{ asset('images/one-small-step2.jpg') }}" class="movie_pic mb-4"/>
                            <h3 class="h4 mb-2">One small step</h3>
                            <p class="text-muted mb-0">One Small Step is a wonderful film that has a lot to say, about how much one person can effect your life and not giving up your dreams. Even though One Small Step is only six minutes long, it never feels rushed and, crucially, every moment feels resonant. Directors Andrew Chesworth and Bobby Pontillas are able to tell a complex story concisely, efficiently and in a universal way.</p>
                        </div>
                    </div>
                    <div>
                        <div class="mt-5">
                            <img src="{{ asset('images/feast.jpg') }}" class="movie_pic mb-4"/>
                            <h3 class="h4 mb-2">Feast</h3>
                            <p class="text-muted mb-0">Disney shorts are always amazing, and this short is no exception. Feast centers on Winston, a stray French bulldog, who was adopted by a man who would give him unhealthy table straps. But after the man finds a girlfriend, things start going green for Winston. By the end, you realize something that this short does: have a short, but well-rounded and detailed, story-line. You see everything in this story and you feel every emotion in this short, whether it's happiness and joy or depressed and sad. This short makes you feel everything going on in this small tale.</p>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-3">
                    <a href="#about">
                        <i class="fas fa-4x fa-angle-double-down text-primary mb-4"></i>
                    </a>
                </div>
            </div>
        </section>
        <!-- About section-->
        <section class="page-section bg-dark text-white" id="about">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-white mt-0">About us </h2>
                        <hr class="divider light my-4" />
                        <p class="text-white">
                            We're creating a community of people who want to watch high quality complex stories. If you want us to advise you good short movies - join us!
                        </p>
                        <hr class="divider light my-4" />

                        <p class="text-white font-weight-light mb-5">You can join us <a href="https://t.me/interactor">here</a></p>
                        <p class="text-white font-weight-light mb-5">If you don't have Telegram you can leave us your email</p>
                        
                        <form method="POST" action="{{ route('email.store') }}">
                            @csrf

                            <div class="form-group row">
                                <label class="col-form-label">Email:</label>

                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="mail" />
                                </div>
                            </div>
                            <input type="hidden" name="type" value="emotional_list"/>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <input type="submit" class="btn btn-primary" value="Send" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer-->
        <footer class="bg-light py-5">
            <div class="container"><div class="small text-center text-muted">Copyright © 2020 - LLC Interactor</div></div>
        </footer>
        <!-- Bootstrap core JS-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
        <!-- Third party plugin JS-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
    </body>
</html>
