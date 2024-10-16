<template>
  <div class="container">
    <div class="sidebar">
      <div class="header">
        <!-- make the name clikable -->
        <div class="logo">
          <svg 
            width="138" 
            height="17" 
            viewBox="0 0 138 17" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M117.939 6.7438V17H121.406V10.1625H134.087V17H137.554V6.7438H117.939ZM121.01 3.41873H134.384C136.266 3.09091 137.604 1.49862 138 0H117.394C117.79 1.49862 119.177 3.04408 121.01 3.41873ZM107.388 17C109.122 16.2975 110.063 15.0799 110.459 13.6749H94.8564V0.046832H91.3395V17H107.388ZM65.3344 3.3719H77.7178C79.6001 2.85675 81.1356 1.49862 81.5319 0.046832H61.9166V10.0689H77.9655V13.5813H65.384C63.4026 14.0964 61.7185 15.3609 60.8764 17H81.4328V6.7438H65.384L65.3344 3.3719ZM34.8218 3.41873H48.1959C50.0781 3.09091 51.4651 1.49862 51.8118 0H31.1564C31.5526 1.49862 32.9396 3.04408 34.8218 3.41873ZM34.8218 10.1157H48.1959C50.0781 9.78788 51.4651 8.19559 51.8118 6.69697H31.1564C31.5526 8.19559 32.9396 9.74105 34.8218 10.1157ZM34.8218 17H48.1959C50.0781 16.6722 51.4651 15.0799 51.8118 13.5813H31.1564C31.5526 15.0799 32.9396 16.6722 34.8218 17Z"
              fill="#E51837"
            />
            
            <path 
              d="M0 0.0468319C0.396268 1.54545 1.7832 3.04408 3.61594 3.41873H9.26276L9.55996 3.5124V16.9532H13.0768V3.5124L13.374 3.41873H19.0208C20.9031 2.95041 22.2405 1.54545 22.6368 0.0468319V0L0 0.0468319Z"
              fill="#E51837"
            />
          </svg>
        </div>

        <ul class="menu">
          <li>


            <router-link
              class="active" 
              to="/reports"
            >
              <svg 
                width="20.93"
                height="11.59"
                viewBox="0 0 22 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.6656 0.85L17.2058 2.29L11.9863 7.17L8.46745 3.88C8.05032 3.49 7.37649 3.49 6.95936 3.88L0.541974 9.89C0.124843 10.28 0.124843 10.91 0.541974 11.3C0.959104 11.69 1.63293 11.69 2.05006 11.3L7.70806 6L11.2269 9.29C11.6441 9.68 12.3179 9.68 12.735 9.29L18.7139 3.71L20.2541 5.15C20.5856 5.46 21.1632 5.24 21.1632 4.8V0.5C21.1739 0.22 20.9386 0 20.6391 0H16.0507C15.5694 0 15.3341 0.54 15.6656 0.85Z" />
              </svg>

              Reports
            </router-link>


          </li>

          <li>


            <router-link to="#!">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.0475 20.2647V14.2085H7.42968C6.92645 14.2085 6.58643 13.6234 6.83124 13.1406L11.8363 2.65189C12.1491 1.96435 13.1148 2.21304 13.1148 2.98835V9.11774H16.5694C17.0726 9.11774 17.399 9.68826 17.1814 10.171L12.3396 20.5866C12.0131 21.2887 11.0475 21.0401 11.0475 20.2647Z" />
              </svg>

              Library
            </router-link>


          </li>

          <li>


            <router-link to="#!">
              <svg 
                width="26.09"
                height="24"
                viewBox="0 0 27 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fill-rule="evenodd" 
                  clip-rule="evenodd" 
                  d="M12.337 8C12.337 9.66 10.8913 11 9.08697 11C7.28262 11 5.8261 9.66 5.8261 8C5.8261 6.34 7.28262 5 9.08697 5C10.8913 5 12.337 6.34 12.337 8ZM21.0326 8C21.0326 9.66 19.587 11 17.7826 11C15.9783 11 14.5217 9.66 14.5217 8C14.5217 6.34 15.9783 5 17.7826 5C19.587 5 21.0326 6.34 21.0326 8ZM9.08697 13C6.55436 13 1.47827 14.17 1.47827 16.5V18C1.47827 18.55 1.9674 19 2.56523 19H15.6087C16.2065 19 16.6957 18.55 16.6957 18V16.5C16.6957 14.17 11.6196 13 9.08697 13ZM16.7283 13.05C17.1087 13.02 17.4674 13 17.7826 13C20.3152 13 25.3913 14.17 25.3913 16.5V18C25.3913 18.55 24.9022 19 24.3044 19H18.6739C18.7935 18.69 18.8696 18.35 18.8696 18V16.5C18.8696 15.03 18.0109 13.92 16.7717 13.09C16.7685 13.087 16.7652 13.083 16.7616 13.0787C16.7533 13.0688 16.7434 13.057 16.7283 13.05Z"
                />
              </svg>

              People
            </router-link>


          </li>

          <li>


            <router-link to="#!">
              <svg 
                width="26.09"
                height="24"
                viewBox="0 0 27 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fill-rule="evenodd" 
                  clip-rule="evenodd" 
                  d="M22.1305 3H4.73922C3.54357 3 2.56531 3.9 2.56531 5V19C2.56531 20.1 3.54357 21 4.73922 21H22.1305C23.3262 21 24.3044 20.1 24.3044 19V5C24.3044 3.9 23.3262 3 22.1305 3ZM10.174 17H6.91313C6.31531 17 5.82618 16.55 5.82618 16C5.82618 15.45 6.31531 15 6.91313 15H10.174C10.7718 15 11.261 15.45 11.261 16C11.261 16.55 10.7718 17 10.174 17ZM10.174 13H6.91313C6.31531 13 5.82618 12.55 5.82618 12C5.82618 11.45 6.31531 11 6.91313 11H10.174C10.7718 11 11.261 11.45 11.261 12C11.261 12.55 10.7718 13 10.174 13ZM10.174 9H6.91313C6.31531 9 5.82618 8.55 5.82618 8C5.82618 7.45 6.31531 7 6.91313 7H10.174C10.7718 7 11.261 7.45 11.261 8C11.261 8.55 10.7718 9 10.174 9ZM20.7175 11.12L17.2718 14.29C16.8479 14.68 16.1523 14.68 15.7284 14.29L14.1957 12.87C13.7718 12.48 13.7718 11.85 14.1957 11.46C14.6197 11.07 15.3044 11.07 15.7284 11.46L16.5001 12.17L19.1849 9.7C19.6088 9.31 20.2936 9.31 20.7175 9.7L20.7284 9.71C21.1414 10.1 21.1414 10.74 20.7175 11.12Z" 
                />
              </svg>

              Activities
            </router-link>


          </li>
        </ul>

        <ul class="menu">
          <h3 class="menu-tite">
            Support
          </h3>

          <li>


            <router-link to="#!">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.9999 3C11.5399 3 11.0699 3.04 10.5999 3.14C7.83995 3.67 5.63995 5.9 5.11995 8.66C4.63995 11.27 5.59995 13.67 7.33995 15.22C7.76995 15.6 7.99995 16.13 7.99995 16.69V19C7.99995 20.1 8.89995 21 9.99995 21H10.2799C10.6299 21.6 11.2599 22 11.9999 22C12.7399 22 13.3799 21.6 13.7199 21H13.9999C15.0999 21 15.9999 20.1 15.9999 19V16.69C15.9999 16.14 16.2199 15.6 16.6399 15.23C18.0899 13.95 18.9999 12.08 18.9999 10C18.9999 6.13 15.8699 3 11.9999 3ZM12.4999 14H11.4999V11.41L9.66995 9.59L10.3799 8.88L11.9999 10.5L13.6199 8.88L14.3299 9.59L12.4999 11.42V14ZM13.4999 19C13.4899 19 13.4799 18.99 13.4699 18.99V19H10.5299V18.99C10.5199 18.99 10.5099 19 10.4999 19C10.2199 19 9.99995 18.78 9.99995 18.5C9.99995 18.22 10.2199 18 10.4999 18C10.5099 18 10.5199 18.01 10.5299 18.01V18H13.4699V18.01C13.4799 18.01 13.4899 18 13.4999 18C13.7799 18 13.9999 18.22 13.9999 18.5C13.9999 18.78 13.7799 19 13.4999 19ZM13.4999 17H10.4999C10.2199 17 9.99995 16.78 9.99995 16.5C9.99995 16.22 10.2199 16 10.4999 16H13.4999C13.7799 16 13.9999 16.22 13.9999 16.5C13.9999 16.78 13.7799 17 13.4999 17Z" />
              </svg>

              Get Started
            </router-link>


          </li>

          <li>


            <router-link to="#!">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_970_629)">
                  <path d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" />
                </g>

                <defs>
                  <clipPath id="clip0_970_629">
                    <rect 
                      width="24" 
                      height="24"
                    />
                  </clipPath>
                </defs>
              </svg>

              Settings
            </router-link>


          </li>
        </ul>
      </div>

      <div class="profile">
        <div class="profile-content">
          <svg 
            width="34"
            height="34" 
            viewBox="0 0 34 34" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect 
              width="34" 
              height="34" 
              rx="17" 
              fill="url(#pattern0_1209_639)"
            />
            
            <defs>
              <pattern 
                id="pattern0_1209_639" 
                patternContentUnits="objectBoundingBox" 
                width="1" 
                height="1"
              >
                <use 
                  xlink:href="#image0_1209_639" 
                  transform="scale(0.005)"
                />
              </pattern>

              <image 
                id="image0_1209_639" 
                width="200" 
                height="200" 
                xlink:href="data:image/jpeg;base64,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"
              />
            </defs>
          </svg>
            
          <div>
            <!-- make the name clikable -->
            <h3 class="name">
              Sam Wheeler
            </h3>

            <p class="email">
              samwheeler@example.com
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="header">
        <h1>
          {{ header_title }}
        </h1>
        
        <div class="download">
          <svg 
            width="12.83"
            height="15.58"
            viewBox="0 0 14 17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.2074 6.25H9.74992V1.66667C9.74992 1.1625 9.33742 0.75 8.83325 0.75H5.16658C4.66242 0.75 4.24992 1.1625 4.24992 1.66667V6.25H2.79242C1.97659 6.25 1.56409 7.24 2.14158 7.8175L6.34908 12.025C6.70658 12.3825 7.28408 12.3825 7.64158 12.025L11.8491 7.8175C12.4266 7.24 12.0233 6.25 11.2074 6.25ZM0.583252 15.4167C0.583252 15.9208 0.995752 16.3333 1.49992 16.3333H12.4999C13.0041 16.3333 13.4166 15.9208 13.4166 15.4167C13.4166 14.9125 13.0041 14.5 12.4999 14.5H1.49992C0.995752 14.5 0.583252 14.9125 0.583252 15.4167Z" />
          </svg>

          Download
        </div>
      </div>

      <slot />
    </div>
  </div>
</template>


<script>
  export default {
    name: "Layout",
    props: {
      header_title: {
        type: String,
        required: true,
      },
    },
  };
</script>


<style scoped>
  .container {
    display: flex;
  }

  .sidebar {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 246px;
    height: 1162px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(239, 240, 246, 1);
    padding: 20px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
  }

  .sidebar .header {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    margin-left: -14px;
    margin-top: -5px;
    overflow: hidden;
    padding-left: 14px;
    padding-top: 5px;
  }

  .sidebar .logo {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 38px;
  }

  .sidebar .menu {
    list-style: none;
    padding: 0;
  }

  .sidebar .menu .menu-tite {
    padding-left: 17px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
    line-height: 20px;
    letter-spacing: -0.20000000298023224px;
  }

  .sidebar .menu li {
    margin-bottom: 20px;
  }

  .sidebar .menu li a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);
    fill: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 10px;
    transition: background-color 0.3s;
  }

  .sidebar .menu li a:hover,
  .sidebar .menu li a.active {
    color: rgba(27, 89, 248, 1);
    background: rgba(27, 89, 248, 0.1);
    fill: rgba(27, 89, 248, 1);
  }

  .sidebar .menu li a svg {
    margin-right: 10px;
  }

  .sidebar .profile {
    border-top: 1px solid rgba(229, 229, 229, 1);
  }

  .sidebar .profile .profile-content {
    display: flex;
    flex-direction: column;
    padding: 25px;
  }

  .sidebar .profile img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }

  .sidebar .profile .profile-content .name {
    font-weight: 600;
    line-height: 18px;
    margin: 15px 0 0;
    color: rgba(0, 0, 0, 1);
  }

  .sidebar .profile .profile-content .email {
    margin: 0;
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    font-weight: 400;
    line-height: 14.52px;
  }

  .content {
    flex-grow: 1;
    padding: 20px 50px;
  }

  .content .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  .content .header h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 29.05px;
    text-align: left;
    color: rgba(0, 0, 0, 1);
  }

  .content .header .download {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
    line-height: 18px;
    color: rgba(77, 77, 77, 1);
    fill: rgba(77, 77, 77, 1);
  }

  .content .header .download:hover {
    color: rgba(27, 89, 248, 1);
    fill: rgba(27, 89, 248, 1);
  }

  .content .header .download svg {
    margin-right: 5px;
  }
</style>
