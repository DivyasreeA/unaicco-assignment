import './index.css'

const Home = () => (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="https://seeklogo.com/images/A/airbnb-logo-7F4086530F-seeklogo.com.png" class="airbnb-logo" />
            </a>


            <a class="nav-link" href="#exploreMenuSection" id="navItem2">Become a Host</a>

            <a class="navbar-brand" href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Globo_Logo_1966.png" class="globe-logo" />
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>

                <a class="navbar-brand" href="#">
                    <img src="https://cdn.icon-icons.com/icons2/2645/PNG/512/person_circle_icon_159926.png" class="person-logo" />
                </a>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav mr-auto">
                    <a class="nav-link active" id="navItem1" href="#wcuSection">
                        sign up
                        <span class="sr-only">(current)</span>
                    </a>
                    <a class="nav-link" href="#exploreMenuSection" id="navItem2">login</a>
                    <hr style="height:2px;border-width:1px;color:black;background-color:black">
                    <a class="nav-link" href="#deliveryPaymentSection" id="navItem3">Host Your Room</a>

                    <a class="nav-link" href="#followUsSection" id="navItem4">Host an Experience</a>
                    <a class="nav-link" href="#followUsSection" id="navItem4">Help</a>
                </div>
            </div>
        </div>
    </nav>

    <div class="columnContainer">
        <div class="imageContainer1 d-flex justify-content-start flex-column">
            <h1 class="heading">Collection</h1>

            <h1 class="main-heading mb-3">Most popular <br>around the world</h1>
            <div class="btn-container d-flex justify-content-end flex-column">
                <button class="button">Show all</button>
            </div>
        </div>
        <div class="imageContainer2 d-flex justify-content-start flex-column">
            <h1 class="heading">Collection</h1>
            <h1 class="main-heading mb-3">Great for <br>
                Team Building</h1>
            <div class="btn-container d-flex justify-content-end flex-column">
                <button class="button">Show all</button>
            </div>
        </div>
        <div class="imageContainer3 d-flex justify-content-start flex-column">
            <h1 class="heading">Collection</h1>
            <h1 class="main-heading mb-3">Fun For The Family</h1>
            <div class="btn-container d-flex justify-content-end flex-column">
                <button class="button">Show all</button>
            </div>
        </div>


    </div>


    <div class="button-container1   d-flex justify-content-center flex-column">
        <ul>

            <button class="btn1">Dates</button>
            <button class="btn1">Group Size</button>
            <button class="btn1">More filters</button>
            <button class="btn">Great for Groups</button>
            <button class="btn">Family-friendly</button>
            <button class="btn">Animals</button>
            <button class="btn">Arts & Writing</button>
            <button class="btn">Baking</button>
            <button class="btn">Cooking</button>
            <button class="btn">Dance</button>
            <button class="btn">Drinks</button>
            <button class="btn">Entertainment</button>
        </ul>
    </div>


    <div class="section-heading">
        <h1 class="section-heading">Top Sellers</h1>
    </div>

    <div class="row col-md-12 col-lg-12">

        <div class="column">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGOV2gPRWmzcSgn_aM5SfvVWrR8lW4UQrrOg&usqp=CAU" alt="hallowen" class="image">
            <h1 class="img-heading">the plague doctor of plague-halloween edition<strong>From rs 1321</strong>/person</h1>

        </div>
        <div class="column col-md-12">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8CpZ533tMc0SUN8GevJ3brmVFPvIdUxSLmJEaUlIp&s" class="image">
            <h1 class="img-heading">Solve the mystery escape room also with hallowen <strong>From rs 1272</strong>/person</h1>
        </div>
        <div class="column">
            <img src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2340325-media_library/original/599c584e-f401-4f67-958a-18277ee7dd10.png?im_w=320" class="image">
            <h1 class="img-heading">Murder /mystery escape room Game-Perfect for hallowen <strong>From rs 1272</strong>/person</h1>
        </div>

        <div class="column">
            <img src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1718920-media_library/original/ca228931-6da0-4f13-96ec-a4079eaeb6c1.jpg?im_w=720" class="image">
            <h1 class="img-heading">'No spain No gamer'The fabulous game<strong>From rs 1298</strong>/person</h1>
        </div>
        <div class="column">
            <img src="https://static.wixstatic.com/media/ab2e11_e15a3ebaf1b24896b970dcd405c89e00~mv2.jpeg/v1/fill/w_278,h_278,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ab2e11_e15a3ebaf1b24896b970dcd405c89e00~mv2.jpeg" class="image">
            <h1 class="img-heading">The circus factory <strong>From rs 2028</strong>/person</h1>
        </div>

        <div class="column">
            <img src="https://i.pinimg.com/736x/7a/da/38/7ada38b11b009a0e4893ef58d3e13783--design-posters-flat-design.jpg" class="image">
            <h1 class="img-heading">Design your trip to barcelona with gemma<strong>From rs 3102</strong>/person</h1>
        </div>
        <div class="column">
            <img src="https://cache.marriott.com/content/dam/marriott-renditions/NYCMQ/nycmq-exterior-0166-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=750px:*" class="image">
            <h1 class="img-heading">plan the perfect newyork vaccation <strong>From rs 1558</strong>/person</h1>
        </div>
        <div class="column">
            <img src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2563542-active_media/original/512e69be-ae89-45a9-8f49-530a99f96c4f.jpeg?im_w=320" class="image">
            <h1 class="img-heading">Craft acustom trip to korea with jay <strong>From rs 3504</strong>/person</h1>
        </div>
        <div class="column">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEw-1zLMvvaLB4jcjVvOrAKkNWCqyFku3lew&usqp=CAU" class="image">
            <h1 class="img-heading">Live Tulum like a local <strong>From rs 1272</strong>/person</h1>

        </div>
        <div class="column">
            <img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_320,q_75,w_640,x_3326,y_2943/v1/clients/austin/Paddleboarding_on_Lady_Bird_Lake_credit_Nick_Simonite_expires_September_2021_1__58d68578-e856-4dda-8279-3ff23745e3ea.jpg" class="image">
            <h1 class="img-heading">Plan a trip to Amazing Austun <strong>From rs 2050</strong>/person</h1>
        </div>
        <div class="column">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvVqY0hi87lOc3TdudXH-5YbJOfeuTU7Qfw&usqp=CAU" class="image">
            <h1 class="img-heading">Pasta with grandmas <strong>From rs 2694</strong>/person</h1>
        </div>
        <div class="column">
            <img src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2422459-media_library/original/8262d6c7-f0dc-45f0-9610-53f6577cc380.jpeg?im_w=480" class="image">
            <h1 class="img-heading">'From paris with laughs'The Scavenger hunt <strong>From rs 1143</strong>/person</h1>
        </div>

    </div>
)

export default Home