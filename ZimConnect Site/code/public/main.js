tailwind.config = {
    theme: {
      extend: {
        //Customising colours
        colors: {
          'prettyindigo': '#366775',
          'grayblue': '#a2b4c0',
          'brightblush': '#F7D0CB',
          'warmpeach': '#F4AC94',
          'tangypeel': '#D66D50',
          'leaf': '#68745c',
        },
          //Customising fonts
          fontFamily: {
              'allura': ['allura'],
              'draw': ['"Drawing of a New Day"']
        }
      }
    }
}

//Waiting for DOM content to fully load
document.addEventListener("DOMContentLoaded", () => {
    navigateTo(window.location.hash);
});

//Listening for changes in the hash part of the URL
window.addEventListener("hashchange", () => {
    navigateTo(window.location.hash);
});

//Function to navigate to various parts of the website
function navigateTo(hash) {
    //Determining which page to load based on the hash
    switch (hash) {
        case "#/signup":
            loadSignupPage();
            break;
        case "#/login":
            loadLoginPage();
            break;    
        case "#/feed":
            loadFeedPage();
            break;
        case "#/post":
            loadPostPage();
            break; 
        case "#/category":
            loadCategoryPage();
            break;
        case "#/notification":
            loadNotificationPage();
            break;           
        case "#/profile":
            loadProfilePage();
            break;
        default:
            // Loading login page by default if there is not a hash found 
            loadLoginPage();
            break;
    }
}

//Rendering the header of the website
function renderHeader() {
    return `<nav class="bg-leaf">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <!-- Aligning items -->
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-shrink-0 items-end">
          <!-- Placing the logo onto the navigation bar -->
            <img src="Images/logo.png" alt="logo" style="width: 250px; height: 190px">
          </div>
          <!-- Navigation links container -->
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <a href="#/feed" class="text-gray-300 hover:bg-yellow-600 hover:text-white rounded-md px-3 py-2 text-2xl font-draw font-medium">FEED</a>
                <a href="#/post" class="text-gray-300 hover:bg-yellow-600 hover:text-white rounded-md px-3 py-2 text-2xl font-draw font-medium">POST</a>
                <a href="#/category" class="text-gray-300 hover:bg-yellow-600 hover:text-white rounded-md px-3 py-2 text-2xl font-draw font-medium">CATEGORY</a>
              </div>
            </div>
          </div>
          <!-- Constructing the search input bar -->
          <div class="pt-2 relative mx-auto text-gray-600">
            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Search">
            <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
              <!-- Constructing the search icon-->
              <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                  width="512px" height="512px">  
                <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
              </svg>
            </button>
          </div>
          <!-- Profile and notification buttons container -->
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <!-- Notification button -->
            <button onclick="window.location.hash = '#/notification'" class="relative rounded-full bg-yellow-100 p-2 text-black hover:text-grey-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-1.5"></span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
            </button>
            <button onclick="window.location.hash = '#/profile'" class="relative rounded-full bg-yellow-100 p-2 mx-2 text-black hover:text-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="absolute -inset-1.9"></span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>`; 
}
  
// Rendering the footer
function renderFooter() {
    return `<footer class="text-center p-4 bg-yellow-50 mt-4 fixed bottom-0 w-full">
                <p>&copy; 2024 ZimConnect. All rights reserved.</p>
            </footer>`;
}

//Function loads content into specified container
function loadPageContent(content, showHeader = true) {
    const app = document.getElementById("app");
    if (showHeader) {
        //Showing header and footer with the content
        app.innerHTML = renderHeader() + content + renderFooter();
    } else {
        //Showing only the footer with the content
        app.innerHTML = content + renderFooter();
    }
}

//Loading signup page content
function loadSignupPage() {
    const signupContent = `
    <div class="py-16">
        <!-- Signup form -->
        <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div class="hidden lg:block lg:w-1/2 bg-cover"
                style="background-image:url('Images/backk.png')">
            </div>
            <div class="w-full p-8 lg:w-1/2">
            <img class="mt-2" src="/Images/logo.png" alt="ZimConnect">
                <p class="text-2xl text-gray-600 text-center font-allura">We do more than cook, we inspre.</p>
                <!-- Signing up with Google -->
                <a href="#" class="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                    <div class="px-4 py-3">
                        <!-- Constructing Google font -->
                        <svg class="h-6 w-6" viewBox="0 0 40 40">
                            <path
                                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                fill="#FFC107" />
                            <path
                                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                fill="#FF3D00" />
                            <path
                                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                fill="#4CAF50" />
                            <path
                                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                fill="#1976D2" />
                        </svg>
                    </div>
                    <h1 class="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign up with Google</h1>
                </a>
                <!-- Username and password input fields -->
                <div class="mt-4 flex items-center justify-between">
                    <span class="border-b w-1/5 lg:w-1/4"></span>
                    <a href="#" class="text-xs text-center text-gray-500 uppercase">or sign up with username</a>
                    <span class="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <!-- Username input field -->
                <div class="mt-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                </div>
                <!-- Password input field -->
                <div class="mt-4">
                    <div class="flex justify-between">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    </div>
                    <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                </div>
                <div class="mt-4">
                    <div class="flex justify-between">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                    </div>
                    <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                </div>
                <!-- Signup button -->
                <div class="mt-8">
                    <button id="signupButton" class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Sign up</button>
                </div>
                <!-- Login link -->
                <div class="mt-4 flex items-center justify-between">
                    <span class="border-b w-1/5 md:w-1/4"></span>
                    <a href="#/login" class="text-xs text-gray-500 uppercase">or login</a>
                    <span class="border-b w-1/5 md:w-1/4"></span>
                </div>
            </div>
        </div>
    </div>`;

    //Loading signup content without header
    loadPageContent(signupContent, false); 
      //Addding event listener to the signup button
      document.getElementById("signupButton").addEventListener("click", () => {
        //Redirecting to feed page
        window.location.hash = "#/feed"; 
      });  
}

//Loading login page content
function loadLoginPage() {
    const loginContent = `
    <div class="py-16">
        <!-- Login form -->
        <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div class="hidden lg:block lg:w-1/2 bg-cover"
                style="background-image:url('/Images/backk.png')">
            </div>
            <div class="w-full p-8 lg:w-1/2">
            <img class="mt-2" src="/Images/logo.png" alt="ZimConnect">
                <p class="text-2xl text-gray-600 text-center font-allura">We do more than cook, we inspre.</p>
                <!-- Login with google button -->
                <a href="#" class="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                    <div class="px-4 py-3">
                        <svg class="h-6 w-6" viewBox="0 0 40 40">
                            <-- Google logo -->
                            <path
                                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                fill="#FFC107" />
                            <path
                                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                fill="#FF3D00" />
                            <path
                                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                fill="#4CAF50" />
                            <path
                                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                fill="#1976D2" />
                        </svg>
                    </div>
                    <h1 class="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Login with Google</h1>
                </a>
                <! Providing an alternative login option -->
                <div class="mt-4 flex items-center justify-between">
                    <span class="border-b w-1/5 lg:w-1/4"></span>
                    <a href="#" class="text-xs text-center text-gray-500 uppercase">or login with username</a>
                    <span class="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <!-- Username input field -->
                <div class="mt-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                </div>
                <!-- Password input field -->
                <div class="mt-4">
                    <div class="flex justify-between">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <a href="#" class="text-xs text-gray-500">Forget Password?</a>
                    </div>
                    <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                </div>
                <!-- Login button -->
                <div class="mt-8">
                    <button id="loginButton" class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <span class="border-b w-1/5 md:w-1/4"></span>
                    <a href="#/signup" class="text-xs text-gray-500 uppercase">or signup</a>
                    <span class="border-b w-1/5 md:w-1/4"></span>
                </div>
            </div>
        </div>
    </div>`;

    //Loading login content without header
    loadPageContent(loginContent, false);
    //Adding event listener to the login button
    document.getElementById("loginButton").addEventListener("click", () => {
        window.location.hash = "#/feed";
    });
}

//Loading feed content
function loadFeedPage() {
    const feedContent = `
    <h1 class="text-7xl font-bold mt-10 mb-6 text-center font-allura">Today's Picks!</h1>
    <!-- Three column layout for posts -->
    <div class="flex">
        <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div class="w-full">
                    <div class="w-full flex p-2">
                        <div class="pl-2 pt-2 ">
                            <p class="font-bold">nomsatk</p>
                            <p class="text-xs">20 February 2024</p>
                        </div>
                    </div>
                </div>
                <!-- Image for the post -->
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="/Images/sadza.jpg" alt="post"/>
                <div class="p-4">
                    <h2 class="tracking-widest text-xs title-font font-bold text-prettyindigo mb-1 uppercase ">Sadza and derere (okra)</h2>
                    <div class="flex items-center flex-wrap ">
                        <a href="#" class="text-green-800  md:mb-2 lg:mb-0">
                            <p class="inline-flex items-center">Read Recipe
                                <!-- Read recipe arrow icon -->
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </p>
                        </a>
                        <!-- Like count -->
                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                            62
                        </span>
                        <!-- Comment count -->
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            9
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Second column -->
        <div class="p-4 md:w-1/3">
            <!-- Post container --> 
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div class="w-full">
                    <div class="w-full flex p-2">
                        <div class="pl-2 pt-2 ">
                            <!-- Post author-->
                            <p class="font-bold">sunny_day</p>
                            <p class="text-xs">2 February 2024</p>
                        </div>
                    </div>
                </div>
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="/Images/maguru.jpg" alt="post"/>
                <div class="p-4">
                    <h2 class="tracking-widest text-xs title-font font-bold text-prettyindigo mb-1 uppercase ">Maguru (Beef Tripe)</h2>
                    <div class="flex items-center flex-wrap ">
                        <a href="#" class="text-green-800  md:mb-2 lg:mb-0">
                            <p class="inline-flex items-center">Read Recipe
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </p>
                        </a>
                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                            44
                        </span>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            12
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Third column -->
        <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div class="w-full">
                    <div class="w-full flex p-2">
                        <div class="pl-2 pt-2 ">
                            <p class="font-bold">rainyday</p>
                            <p class="text-xs">12 January 2024</p>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <!-- Post name -->
                    <h2 class="tracking-widest text-xs title-font font-bold text-prettyindigo mb-1 uppercase ">Mutakura (Grain Mixture)</h2>
                    <div class="flex items-center flex-wrap ">
                        <a href="#" class="text-green-800  md:mb-2 lg:mb-0">
                            <p class="inline-flex items-center">Read Recipe
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </p>
                        </a>
                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                            52
                        </span>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            10
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    //Loading feed page content
    loadPageContent(feedContent);
}    

//Loading post page content
function loadPostPage() {
    const postContent = `
    <div class="flex">
        <!-- One hald of the page -->
        <div class="w-1/2">
            <!-- Decorative image -->
            <img src="/Images/deco2.png" alt="Decorative" style="width: 850px; height: 650px">
        </div>
        <!-- Second half of the page -->
        <div class="w-1/2">
            <div class="bg-white w-full shadow rounded-lg p-5">
                <textarea class="bg-white w-full rounded-lg shadow border font-allura text-2xl p-2 mb-3" rows="4" placeholder="Name of dish and brief description"></textarea>
                <textarea class="bg-white w-full rounded-lg shadow border p-2 font-allura text-2xl mb-3" rows="5" placeholder="Ingredients"></textarea>
                <textarea class="bg-white-300 w-full rounded-lg shadow border p-2 font-allura text-2xl mb-3" rows="5" placeholder="Steps to take"></textarea>
                <!-- Image selection and share button -->
                <div class="w-full flex flex-row flex-wrap">
                    <div class="w-1/3">
                        <!-- Image selection dropdown -->
                        <select class="w-full p-2 rounded-lg bg-white-200 shadow border">
                            <option>No Image</option>
                            <option>Image</option>
                        </select>
                    </div>
                    <!-- SH=hare button -->
                    <div class="w-2/3">
                        <button type="button" class="float-right bg-tangypeel hover:bg-yellow-800 text-white p-2 rounded-lg">Share</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    //Loading post page content
    loadPageContent(postContent)
} 

//Loading the category page content
function loadCategoryPage() {
    const categoryContent= `
    <div class="bg-white">
      <!-- Category selection -->
      <div class="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div class="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 class="text-5xl font-bold tracking-tight font-allura text-yellow-700">Browse through our categories!</h2>
        </div>
        <!-- Category items -->
        <div class="relative mt-8">
          <div class="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul role="list" class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0">
              <!-- Starch recipes category -->
              <li class="inline-flex w-64 flex-col text-center lg:w-auto">
                <div class="group relative">
                  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                    <img src="/Images/starchh.jpg" alt="starch" class="max-h-50 w-full object-cover object-center group-hover:opacity-75">
                  </div>
                  <!-- Category title -->
                  <div class="mt-6">
                    <h3 class="mt-1 font-semibold font-allura text-3xl text-gray-900">
                      <a href="#">
                        <span class="absolute inset-0"></span>
                        Starch Recipes
                      </a>
                    </h3>
                  </div>
                </div>
                <!--Meat recipes category -->
               <li class="inline-flex w-64 flex-col text-center lg:w-auto">
                <div class="group relative">
                  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                    <img src="/Images/meatt.jpg" alt="meat" class="max-h-22 w-full object-cover object-center group-hover:opacity-75">
                  </div>
                  <div class="mt-6">
                    <h3 class="mt-1 font-semibold font-allura text-3xl text-gray-900">
                      <a href="#">
                        <span class="absolute inset-0"></span>
                        Meat Recipes
                      </a>
                    </h3>
                  </div>
                </div>
               <!-- Patry Recipes category --> 
               <li class="inline-flex w-64 flex-col text-center lg:w-auto">
                <div class="group relative">
                  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                    <img src="/Images/pastryy.jpg" alt="" class="h-full w-full object-cover object-center group-hover:opacity-75">
                  </div>
                  <div class="mt-6">
                    <h3 class="mt-1 font-semibold font-allura text-3xl text-gray-900">
                      <a href="#">
                        <span class="absolute inset-0"></span>
                        Pastry Recipes
                      </a>
                    </h3>
                  </div>
                </div>
               <!-- Grain recipes category -->  
               <li class="inline-flex w-64 flex-col text-center lg:w-auto">
                <div class="group relative">
                  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                    <img src="/Images/grain.jpg" alt="" class="h-full w-full object-cover object-center group-hover:opacity-75">
                  </div>
                  <div class="mt-6">
                    <h3 class="mt-1 font-semibold font-allura text-3xl text-gray-900">
                      <a href="#">
                        <span class="absolute inset-0"></span>
                        Grain Recipes
                      </a>
                    </h3>
                  </div>
                </div>
            </ul>
          </div>
        </div>
      </div>
    </div>`;
    //Loading category page content
    loadPageContent(categoryContent);
}

//Loading notification page
function loadNotificationPage() {
    const notificationContent = `
    <div style="background-image: url('/Images/deco3.png');" class="flex justify-end bg-gradient-to-t h-screen p-6 bg-no-repeat bg-center">
        <!-- Notification container -->
        <div class="w-full md:w-1/2 lg:w-1/3">
            <div class="flex flex-col space-y-2">
                <!-- New follower notification --> 
                <div class="flex justify-between py-6 px-4 bg-white/30 rounded-lg">
                    <div class="flex items-center space-x-4">
                        <div class="flex flex-col space-y-1">
                            <span class="font-bold">cloudyday started following you.</span>
                        </div>
                    </div>
                    <div class="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
                        28m ago
                    </div>
                </div>
                <div class="flex justify-between py-6 px-4 bg-white/30 rounded-lg">
                    <div class="flex items-center space-x-4">
                        <div class="flex flex-col space-y-1">
                            <span class="font-bold">rainy_day commented on your post.</span>
                            <span class="text-sm">Add extra water next time!</span>
                        </div>
                    </div>
                    <!-- Notification time -->
                    <div class="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
                        2h ago
                    </div>
                </div>
                <!-- Like notification -->
                <div class="flex justify-between py-6 px-4 bg-white/30 rounded-lg">
                    <div class="flex items-center space-x-4">
                        <div class="flex flex-col space-y-1">
                            <span class="font-bold">rainy_day liked your post.</span>
                        </div>
                    </div>
                    <div class="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
                        2h ago
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    loadPageContent(notificationContent);
}


//Loading profile paage content
function loadProfilePage() {
    const profileContent = `
    <div class="px-3 py-2 ">
        <!-- Displaying profile information -->
        <div class="flex flex-col gap-1 text-center">
            <!-- Displaying profile image and username -->
            <a class="block mx-auto bg-center bg-no-repeat bg-cover w-20 h-20 rounded-full border border-gray-400 shadow-lg" href="" style="background-image: url('/Images/profile.jpeg')"></a>
            <p class="font-serif font-semibold">nomsatk</p>
        </div>
        <!-- Displaying profile statistics -->
        <div class="flex justify-center items-center gap-2 my-3">
            <div class="font-semibold text-center mx-4">
                <p class="text-black">1</p>
                <span class="text-gray-400">Posts</span>
            </div>
            <!-- Displaying followers count -->
            <div class="font-semibold text-center mx-4">
                <p class="text-black">118</p>
                <span class="text-gray-400">Followers</span>
            </div>
            <div class="font-semibold text-center mx-4">
                <p class="text-black">52</p>
                <span class="text-gray-400">Folowing</span>
            </div>
        </div>
        <!-- Profile buttons -->
        <div class="flex justify-center gap-2 my-5">
            <button class="bg-yellow-500 px-10 py-2 rounded-full text-white shadow-lg">Edit profile</button>
            <button class="bg-white border border-gray-500 px-10 py-2 rounded-full shadow-lg">Saved posts</button>
            <button onclick="window.location.hash = '/#login'"class="bg-white border border-gray-500 px-10 py-2 rounded-full shadow-lg">Logout</button>
        </div>
        <!-- Displaying cookbook (all posts made by the user) -->
        <h1 class="text-6xl font-bold mt-10 mb-6 text-center font-allura">Your Cookbook!</h1>
        <div class="flex">
        <div class="p-4 md:w-full mb-16 max-w-2xl mx-auto">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div class="w-full">
                    <div class="w-full flex p-2">
                        <div class="pl-2 pt-2 ">
                            <p class="font-bold">nomsatk</p>
                            <p class="text-xs">20 February 2024</p>
                        </div>
                    </div>
                </div>
                <!-- Post image -->
                <img class="lg:h-48 md:h-20 w-full object-cover object-center" src="/Images/sadza.jpg" alt="post"/>
                <div class="p-4">
                    <h2 class="tracking-widest text-xs title-font font-bold text-prettyindigo mb-1 uppercase ">Sadza and derere (okra)</h2>
                    <div class="flex items-center flex-wrap ">
                        <a href="/" class="text-green-800  md:mb-2 lg:mb-0">
                            <p class="inline-flex items-center">Read Recipe
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </p>
                        </a>
                        <!-- Displaying like count and icon -->
                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                            62
                        </span>
                        <!-- Displaying comment count and icon -->
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            9
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    //Loading profile page content
    loadPageContent(profileContent);
}





