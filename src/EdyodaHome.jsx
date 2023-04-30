import React, { useEffect, useState } from "react";
import "./Home.css";
const EdyodaHome = () => {
  const [selectedPlan, setSelectedPlan] = useState("179");
  useEffect(() => {
    console.log(selectedPlan);
  }, [selectedPlan]);
  return (
    <div className="container   bg-dark">
      <div className="row">
        <div className="col col-md-7 p-4 mt-2">
          {/* content1 */}
          <h1 className="text-white "> Access curated courses worth</h1>
          <h1 className="text-white">
            ₹<del className="text-danger ml-3 mr-4">18,500</del>at just
            <span className="text-primary ml-3">₹ 99</span> per year!
          </h1>
          {/* sub content 1 */}
          <div className="  sub-content1 mt-4 ml-5">
            <svg
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M61.936 8.01614C61.232 8.01614 60.4641 8.07998 59.6958 8.07998H59.6319V5.32821C59.6319 4.36839 58.8641 3.6001 57.9038 3.6001C49.648 3.6001 41.5838 5.2001 33.9678 8.33621C26.3517 5.2001 18.2878 3.6001 10.0318 3.6001C9.07199 3.6001 8.3037 4.30412 8.3037 5.32821V8.14433H8.23986C7.472 8.08004 6.70409 8.0162 5.93586 8.0162C4.97604 8.0162 4.27197 8.78406 4.27197 9.74432V43.7923C4.27197 44.7521 4.976 45.4562 5.93586 45.4562C11.3761 45.4562 16.752 46.0964 21.9359 47.3763C21.4881 48.7201 21.168 50.1281 21.168 51.6C21.168 58.6402 26.9278 64.4 33.968 64.4C41.0082 64.4 46.768 58.6402 46.768 51.6C46.768 50.1281 46.4479 48.7201 46.0001 47.3759C51.2484 46.096 56.5599 45.4557 62.0001 45.4557C62.96 45.4557 63.7283 44.7517 63.7283 43.7919L63.7278 9.74386C63.664 8.7836 62.8961 8.01574 61.9358 8.01574L61.936 8.01614ZM11.696 6.99204C18.7362 7.18401 25.648 8.65593 32.304 11.3438V38.9918C30 39.3119 27.9522 40.2079 26.2241 41.5516C21.488 40.2717 16.6241 39.5034 11.7601 39.3757L11.7597 6.9917L11.696 6.99204ZM33.968 61.3921C28.5921 61.3921 24.2399 57.0403 24.2399 51.6639C24.2399 46.288 28.5921 41.8719 33.968 41.8719C39.3439 41.8719 43.6961 46.2237 43.6961 51.6C43.6961 56.9759 39.3439 61.3921 33.968 61.3921ZM56.24 39.376C51.3761 39.5042 46.5119 40.272 41.776 41.5519C40.0479 40.2077 37.9358 39.3117 35.6961 38.9922V11.3442C42.2881 8.65581 49.2001 7.18393 56.2401 6.99193L56.24 39.376Z"
                fill="white"
              />
              <path
                d="M16.3042 15.4397C19.8881 15.8237 23.4721 16.5277 26.9922 17.6156C27.1203 17.6795 27.3123 17.6795 27.5043 17.6795C28.2721 17.6795 28.9123 17.1674 29.1043 16.4634C29.3601 15.5674 28.8485 14.6076 27.9525 14.3514C24.2405 13.2634 20.4645 12.4956 16.6886 12.0474C15.7926 11.9835 14.9605 12.6233 14.8329 13.5192C14.769 13.9675 14.8967 14.4152 15.2168 14.7354C15.4721 15.1836 15.856 15.4397 16.3042 15.4397Z"
                fill="white"
              />
              <path
                d="M16.3041 21.9041C19.888 22.288 23.472 22.992 26.9921 24.08C27.1202 24.1438 27.3122 24.1438 27.4403 24.1438C28.2082 24.1438 28.8483 23.6318 29.0403 22.9277C29.2961 22.0317 28.7845 21.0719 27.8885 20.8157C24.2403 19.7278 20.4005 18.9599 16.6247 18.5117C15.6648 18.4479 14.8965 19.0876 14.7689 19.9836C14.705 20.4318 14.8327 20.8796 15.1528 21.1997C15.472 21.6484 15.8559 21.9041 16.3041 21.9041Z"
                fill="white"
              />
              <path
                d="M16.3042 28.368C19.8881 28.7519 23.4721 29.4559 26.9922 30.5439C27.1203 30.6077 27.3123 30.6077 27.5043 30.6077C28.2721 30.6077 28.9123 30.0956 29.1043 29.3916C29.3601 28.4956 28.8485 27.5358 27.9525 27.2796C24.3043 26.1916 20.4645 25.4238 16.6886 24.9756C15.7926 24.9117 14.9605 25.5515 14.8329 26.4475C14.769 26.8957 14.8967 27.3434 15.2168 27.6636C15.4721 28.1122 15.856 28.3041 16.3042 28.368Z"
                fill="white"
              />
              <path
                d="M26.9921 37.0079C27.1202 37.0718 27.3122 37.0718 27.4403 37.0718C28.2082 37.0718 28.8483 36.5597 29.0403 35.8557C29.2961 34.9597 28.7845 33.9999 27.8885 33.7437C24.2403 32.6557 20.4005 31.8879 16.6247 31.4397C15.6648 31.3115 14.8327 32.0156 14.7689 32.9115C14.705 33.3598 14.8327 33.8075 15.1528 34.1277C15.4086 34.5116 15.8568 34.7036 16.3046 34.7678C19.888 35.2161 23.472 35.9201 26.9921 37.0081L26.9921 37.0079Z"
                fill="white"
              />
              <path
                d="M40.4961 17.68C40.688 17.68 40.8162 17.68 41.0081 17.6161C44.4639 16.592 48.1121 15.8241 51.6961 15.4403C52.1443 15.3764 52.5283 15.1845 52.8479 14.8001C53.1037 14.4161 53.2318 14.0322 53.2318 13.584C53.168 12.688 52.3997 12.0479 51.5037 12.0479H51.3756C47.5997 12.4318 43.8238 13.1996 40.1117 14.3519C39.6635 14.48 39.3438 14.8001 39.0876 15.184C38.8956 15.5679 38.8318 16.0161 38.9595 16.4639C39.088 17.2322 39.7278 17.68 40.4961 17.68Z"
                fill="white"
              />
              <path
                d="M40.4961 24.144C40.6881 24.144 40.8162 24.144 41.0081 24.0802C44.4639 23.0561 48.1121 22.2882 51.6961 21.9043C52.1444 21.8405 52.5283 21.6485 52.8479 21.2641C53.1037 20.8802 53.2319 20.4963 53.2319 20.048C53.1037 19.152 52.272 18.448 51.3761 18.5761C47.6002 18.9601 43.76 19.7279 40.1122 20.8801C39.664 21.0083 39.3443 21.3284 39.0881 21.7123C38.8961 22.0962 38.8323 22.5444 38.96 22.9922C39.0881 23.6319 39.7278 24.144 40.4961 24.144Z"
                fill="white"
              />
              <path
                d="M40.4961 30.6078C40.6881 30.6078 40.8162 30.6078 41.0081 30.544C44.4639 29.5199 48.0484 28.752 51.6961 28.3681C52.1444 28.3043 52.5283 28.1123 52.8479 27.7279C53.1037 27.344 53.2319 26.9601 53.2319 26.5118C53.1037 25.6158 52.272 24.9118 51.3761 24.9757C47.6002 25.3596 43.76 26.1275 40.1122 27.2797C39.664 27.4078 39.3443 27.7279 39.0881 28.1118C38.8961 28.4958 38.8323 28.944 38.96 29.3917C39.0881 30.0958 39.7278 30.6078 40.4961 30.6078Z"
                fill="white"
              />
              <path
                d="M40.4961 37.0718C40.6881 37.0718 40.8162 37.0718 41.0081 37.0079C44.4639 35.9838 48.1121 35.2159 51.6961 34.8321C52.1444 34.7682 52.5283 34.5762 52.8479 34.1919C53.1037 33.8718 53.2319 33.424 53.2319 32.9758C53.1037 32.0798 52.272 31.3758 51.3761 31.5039C47.6002 31.8878 43.76 32.6556 40.1122 33.8079C39.664 33.936 39.3443 34.2561 39.0881 34.64C38.8961 35.0239 38.8323 35.4721 38.96 35.9199C39.0881 36.5596 39.7278 37.0717 40.4961 37.0717L40.4961 37.0718Z"
                fill="white"
              />
              <path
                d="M32.5603 46.5441C31.7281 45.9682 30.6401 46.6079 30.6401 47.5682V55.5682C30.6401 56.528 31.7281 57.1682 32.5603 56.5923L38.5764 52.5602C39.3442 52.0481 39.3442 50.9602 38.5764 50.512L32.5603 46.5441Z"
                fill="white"
              />
            </svg>

            <h2 className="text-white d-inline ml-5">
              <span className="text-primary">100+ </span>Job relevant courses{" "}
            </h2>
          </div>
          {/* sub content 2 */}

          <div className="  sub-content2 mt-4 ml-5">
            <svg
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.0002 5.18628C18.1122 5.18628 5.18652 18.112 5.18652 34C5.18652 49.888 18.1122 62.8137 34.0002 62.8137C49.8882 62.8137 62.814 49.888 62.814 34C62.814 18.112 49.8882 5.18628 34.0002 5.18628ZM34.0002 57.0537C21.2894 57.0537 10.9465 46.7118 10.9465 34C10.9465 21.2882 21.2889 10.9463 34.0002 10.9463C46.7116 10.9463 57.054 21.2887 57.054 34C57.054 46.7113 46.7116 57.0537 34.0002 57.0537Z"
                fill="white"
              />
              <path
                d="M36.8345 33.1679C36.8577 33.0206 36.88 32.8737 36.88 32.7197V20.1597C36.88 18.5695 35.5903 17.2798 34.0001 17.2798C32.41 17.2798 31.1202 18.5695 31.1202 20.1597V32.7208C31.1202 32.9659 31.0894 35.7538 31.9939 36.5646L40.9059 44.5538C41.4555 45.0471 42.1429 45.2891 42.8273 45.2891C43.617 45.2891 44.4041 44.9659 44.9732 44.3315C46.0348 43.1467 45.9357 41.3266 44.7513 40.265L36.8345 33.1679Z"
                fill="white"
              />
            </svg>

            <h2 className="text-white d-inline ml-5">
              <span className="text-primary">20,000+ </span>Hours of content{" "}
            </h2>
          </div>
          {/* sub content 3 */}

          <div className="  sub-content3 mt-4 ml-5">
            <svg
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5518 5.43163C22.0491 4.94547 21.3754 4.67672 20.6763 4.68297C19.9772 4.68922 19.308 4.96957 18.8138 5.46377C18.3192 5.95841 18.0388 6.6272 18.033 7.32628C18.0268 8.02539 18.2955 8.69908 18.7812 9.20217L27.5625 17.9834H12.6665C10.5451 17.9834 8.51028 18.8263 7.00982 20.3267C5.50936 21.8267 4.6665 23.8616 4.6665 25.9834V55.3171C4.6665 57.439 5.50936 59.4734 7.00982 60.9738C8.51028 62.4738 10.5451 63.3171 12.6665 63.3171H55.3339C57.4553 63.3171 59.4902 62.4738 60.9906 60.9738C62.4906 59.4734 63.3339 57.439 63.3339 55.3171V25.9834C63.3339 23.8616 62.4906 21.8267 60.9906 20.3267C59.4902 18.8263 57.4553 17.9834 55.3339 17.9834H40.4379L49.2192 9.20217C49.7049 8.69905 49.9737 8.02537 49.9679 7.32628C49.9616 6.62717 49.6808 5.9584 49.1866 5.46377C48.692 4.96957 48.0232 4.68922 47.3241 4.68297C46.625 4.67672 45.9513 4.94547 45.4487 5.43163L34.0007 16.8796L22.5518 5.43163ZM9.99977 25.9836C9.99977 25.2765 10.2806 24.5979 10.781 24.0979C11.281 23.5979 11.9592 23.3171 12.6663 23.3171H55.3337C56.0408 23.3171 56.719 23.5979 57.219 24.0979C57.719 24.5979 58.0002 25.2764 58.0002 25.9836V55.3173C58.0002 56.0245 57.719 56.7026 57.219 57.2026C56.719 57.703 56.0408 57.9838 55.3337 57.9838H12.6663C11.9591 57.9838 11.281 57.703 10.781 57.2026C10.2806 56.7026 9.99977 56.0244 9.99977 55.3173V25.9836Z"
                fill="white"
              />
              <path
                d="M19.2081 48.2108C17.9028 48.2108 16.9274 47.8514 16.2821 47.1327C15.6368 46.3994 15.3141 45.3141 15.3141 43.8767V33.9547C15.3141 33.3974 15.4534 32.9794 15.7321 32.7007C16.0254 32.4074 16.4434 32.2607 16.9861 32.2607C17.5141 32.2607 17.9174 32.4074 18.1961 32.7007C18.4894 32.9794 18.6361 33.3974 18.6361 33.9547V43.7447C18.6361 44.3461 18.7608 44.7934 19.0101 45.0867C19.2741 45.3654 19.6188 45.5047 20.0441 45.5047C20.1614 45.5047 20.2714 45.4974 20.3741 45.4827C20.4768 45.4681 20.5868 45.4607 20.7041 45.4607C20.9388 45.4314 21.1001 45.5047 21.1881 45.6807C21.2908 45.8421 21.3421 46.1721 21.3421 46.6707C21.3421 47.1107 21.2541 47.4481 21.0781 47.6827C20.9021 47.9027 20.6308 48.0494 20.2641 48.1228C20.1174 48.1374 19.9488 48.1521 19.7581 48.1668C19.5674 48.1961 19.3841 48.2108 19.2081 48.2108ZM24.9723 48.1448C24.4296 48.1448 24.0116 47.9908 23.7183 47.6827C23.4396 47.3601 23.3003 46.9127 23.3003 46.3407V38.8167C23.3003 38.2301 23.4396 37.7827 23.7183 37.4747C24.0116 37.1521 24.4296 36.9907 24.9723 36.9907C25.5003 36.9907 25.9036 37.1521 26.1823 37.4747C26.4756 37.7827 26.6223 38.2301 26.6223 38.8167V46.3407C26.6223 46.9127 26.4829 47.3601 26.2043 47.6827C25.9256 47.9908 25.5149 48.1448 24.9723 48.1448ZM24.9723 35.1867C24.3563 35.1867 23.8796 35.0474 23.5423 34.7687C23.2196 34.4754 23.0583 34.0647 23.0583 33.5367C23.0583 32.9941 23.2196 32.5834 23.5423 32.3047C23.8796 32.0114 24.3563 31.8647 24.9723 31.8647C25.5883 31.8647 26.0576 32.0114 26.3803 32.3047C26.7029 32.5834 26.8643 32.9941 26.8643 33.5367C26.8643 34.0647 26.7029 34.4754 26.3803 34.7687C26.0576 35.0474 25.5883 35.1867 24.9723 35.1867ZM34.423 48.1668C33.9976 48.1668 33.6236 48.0568 33.301 47.8367C32.9783 47.6021 32.7216 47.2574 32.531 46.8027L29.209 39.1467C29.0476 38.7654 28.989 38.4134 29.033 38.0907C29.077 37.7534 29.231 37.4894 29.495 37.2987C29.7736 37.0934 30.155 36.9907 30.639 36.9907C31.035 36.9907 31.3576 37.0861 31.607 37.2767C31.8563 37.4527 32.0763 37.7974 32.267 38.3107L34.863 44.9107H34.159L36.865 38.2887C37.0703 37.7901 37.2976 37.4527 37.547 37.2767C37.7963 37.0861 38.141 36.9907 38.581 36.9907C38.9623 36.9907 39.263 37.0934 39.483 37.2987C39.7176 37.4894 39.857 37.7461 39.901 38.0687C39.9596 38.3914 39.901 38.7434 39.725 39.1247L36.337 46.8027C36.1463 47.2721 35.8896 47.6167 35.567 47.8367C35.259 48.0568 34.8776 48.1668 34.423 48.1668ZM47.6111 48.2108C46.3351 48.2108 45.2351 47.9834 44.3111 47.5287C43.4018 47.0594 42.6978 46.4067 42.1991 45.5707C41.7151 44.7201 41.4731 43.7227 41.4731 42.5787C41.4731 41.4641 41.7078 40.4887 42.1771 39.6527C42.6465 38.8021 43.2991 38.1421 44.1351 37.6727C44.9858 37.1887 45.9465 36.9467 47.0171 36.9467C47.7945 36.9467 48.4985 37.0787 49.1291 37.3427C49.7598 37.5921 50.3025 37.9587 50.7571 38.4427C51.2118 38.9121 51.5565 39.4914 51.7911 40.1807C52.0258 40.8554 52.1431 41.6107 52.1431 42.4467C52.1431 42.7254 52.0551 42.9381 51.8791 43.0847C51.7031 43.2167 51.4465 43.2827 51.1091 43.2827H44.2011V41.5667H49.7451L49.3931 41.8747C49.3931 41.2734 49.3051 40.7747 49.1291 40.3787C48.9531 39.9681 48.6965 39.6601 48.3591 39.4547C48.0365 39.2494 47.6331 39.1467 47.1491 39.1467C46.6065 39.1467 46.1445 39.2714 45.7631 39.5207C45.3818 39.7701 45.0885 40.1294 44.8831 40.5987C44.6778 41.0681 44.5751 41.6327 44.5751 42.2927V42.4688C44.5751 43.5834 44.8318 44.4047 45.3451 44.9327C45.8731 45.4607 46.6505 45.7247 47.6771 45.7247C48.0291 45.7247 48.4325 45.6807 48.8871 45.5927C49.3418 45.5047 49.7671 45.3654 50.1631 45.1747C50.5005 45.0134 50.8011 44.9621 51.0651 45.0207C51.3291 45.0647 51.5345 45.1821 51.6811 45.3727C51.8278 45.5634 51.9085 45.7834 51.9231 46.0327C51.9525 46.2821 51.9011 46.5314 51.7691 46.7807C51.6371 47.0154 51.4171 47.2134 51.1091 47.3747C50.6105 47.6534 50.0458 47.8587 49.4151 47.9908C48.7991 48.1374 48.1978 48.2108 47.6111 48.2108Z"
                fill="white"
              />
            </svg>

            <h2 className="text-white d-inline ml-5">
              <span className="text-primary">Exclusive</span> webinar access
            </h2>
          </div>
          {/* sub content 4 */}

          <div className="  sub-content4 mt-4 ml-5">
            <svg
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M53.7846 26.0605V32.1404C53.7846 32.3569 53.6998 32.5735 53.5587 32.7427C50.4342 36.4507 41.4079 37.7686 34.001 37.7686C26.5844 37.7686 17.5587 36.4508 14.425 32.7427C14.2835 32.5735 14.2085 32.3569 14.2085 32.1404V26.0605L32.5799 30.0324C33.013 30.1454 33.4741 30.1923 34.001 30.1923C34.5094 30.1923 34.9893 30.1454 35.3844 30.0418L53.7846 26.0605Z"
                fill="white"
              />
              <path
                d="M64.9742 19.9521C64.9742 21.0061 64.2778 21.8628 63.252 22.0887L60.052 22.7851V33.1757C61.4828 33.7217 62.5086 35.5003 62.518 37.665L62.2921 37.4391C61.7649 36.9685 61.097 36.7052 60.4001 36.7052C60.2684 36.7052 60.1367 36.7145 60.0238 36.7333L55.713 37.298C55.8353 35.3029 56.8237 33.6837 58.1693 33.1757V23.1895L34.9875 28.2061C34.6674 28.2816 34.3286 28.3097 33.9992 28.3097C33.6603 28.3097 33.3308 28.2816 33.0201 28.2061L4.73785 22.0883C3.7124 21.8628 3.02539 21.0061 3.02539 19.9522C3.02539 18.9075 3.71244 18.0508 4.7383 17.825L33.0206 11.6978C33.6509 11.5661 34.3384 11.5567 34.9876 11.6978L63.2504 17.825C64.2768 18.0513 64.9732 18.9076 64.9732 19.9522L64.9742 19.9521Z"
                fill="white"
              />
              <path
                d="M35.9969 50.7682L36.146 50.7851V41.7686L33.9907 42.0507L31.8447 41.7686V50.7851L31.9987 50.7677L30.0385 55.0726C29.8229 55.5458 30.0323 56.1039 30.505 56.3195C30.9849 56.5369 31.5381 56.3213 31.7519 55.853L33.9978 50.9204L36.2438 55.8525C36.4598 56.3257 37.0188 56.5347 37.4906 56.319C37.9634 56.1034 38.1728 55.5454 37.9571 55.0722L35.9969 50.7682Z"
                fill="white"
              />
              <path
                d="M29.9628 41.5248L7.73193 38.5976C7.45917 38.5601 7.18596 38.6445 6.97881 38.8329C5.34133 40.3012 4.8235 44.3012 5.03059 47.6047C5.13416 49.3083 5.54844 52.3199 7.07299 53.3739C7.2328 53.4868 7.4212 53.5431 7.60959 53.5431C7.64709 53.5431 7.68504 53.5431 7.71316 53.5337L29.9623 51.0021L29.9628 41.5248Z"
                fill="white"
              />
              <path
                d="M61.747 39.7453C61.5211 39.3596 61.2764 39.0676 61.0224 38.8324C60.8153 38.644 60.5425 38.5596 60.2693 38.5971L38.0293 41.5243V51.002L60.2887 53.5337C60.5146 53.5618 60.7405 53.5055 60.9289 53.3739C63.6298 51.4912 63.4699 42.7668 61.7477 39.7453L61.747 39.7453Z"
                fill="white"
              />
            </svg>
            <h2 className="text-white d-inline ml-5">
              {" "}
              Scholarship worth<span className="text-primary"> ₹94,500</span>
            </h2>
          </div>
          {/* sub content 5 */}

          <div className="  sub-conten5 mt-4 ml-5">
            <svg
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.0002 5.18628C18.1122 5.18628 5.18652 18.112 5.18652 34C5.18652 49.888 18.1122 62.8137 34.0002 62.8137C49.8882 62.8137 62.814 49.888 62.814 34C62.814 18.112 49.8882 5.18628 34.0002 5.18628ZM34.0002 57.0537C21.2894 57.0537 10.9465 46.7118 10.9465 34C10.9465 21.2882 21.2889 10.9463 34.0002 10.9463C46.7116 10.9463 57.054 21.2887 57.054 34C57.054 46.7113 46.7116 57.0537 34.0002 57.0537Z"
                fill="white"
              />
              <path
                d="M15.704 41.1198C15.332 41.1198 15.02 41.0358 14.768 40.8678C14.516 40.6878 14.36 40.4478 14.3 40.1478C14.24 39.8358 14.294 39.4878 14.462 39.1038L18.944 29.4558C19.16 28.9878 19.424 28.6458 19.736 28.4298C20.06 28.2138 20.426 28.1058 20.834 28.1058C21.242 28.1058 21.596 28.2138 21.896 28.4298C22.208 28.6458 22.478 28.9878 22.706 29.4558L27.188 39.1038C27.38 39.4878 27.446 39.8358 27.386 40.1478C27.338 40.4598 27.188 40.6998 26.936 40.8678C26.696 41.0358 26.396 41.1198 26.036 41.1198C25.556 41.1198 25.184 41.0118 24.92 40.7958C24.668 40.5798 24.44 40.2318 24.236 39.7518L23.264 37.4658L24.524 38.3838H17.108L18.386 37.4658L17.414 39.7518C17.198 40.2318 16.976 40.5798 16.748 40.7958C16.52 41.0118 16.172 41.1198 15.704 41.1198ZM20.798 31.7238L18.71 36.7098L18.206 35.8458H23.444L22.94 36.7098L20.834 31.7238H20.798ZM31.1065 40.9578C30.5425 40.9578 30.1105 40.8138 29.8105 40.5258C29.5225 40.2258 29.3785 39.7998 29.3785 39.2478V29.9778C29.3785 29.4258 29.5225 29.0058 29.8105 28.7178C30.1105 28.4178 30.5425 28.2678 31.1065 28.2678H34.6345C36.8425 28.2678 38.5465 28.8198 39.7465 29.9238C40.9585 31.0278 41.5645 32.5878 41.5645 34.6038C41.5645 35.6118 41.4085 36.5118 41.0965 37.3038C40.7845 38.0838 40.3345 38.7498 39.7465 39.3018C39.1585 39.8418 38.4325 40.2558 37.5685 40.5438C36.7165 40.8198 35.7385 40.9578 34.6345 40.9578H31.1065ZM32.6905 38.2758H34.4185C35.0545 38.2758 35.6005 38.1978 36.0565 38.0418C36.5245 37.8858 36.9085 37.6578 37.2085 37.3578C37.5205 37.0578 37.7485 36.6798 37.8925 36.2238C38.0485 35.7678 38.1265 35.2278 38.1265 34.6038C38.1265 33.3558 37.8205 32.4378 37.2085 31.8498C36.5965 31.2498 35.6665 30.9498 34.4185 30.9498H32.6905V38.2758ZM48.7849 41.1558C48.3049 41.1558 47.8009 41.1198 47.2729 41.0478C46.7569 40.9878 46.2649 40.8918 45.7969 40.7598C45.3289 40.6278 44.9089 40.4718 44.5369 40.2918C44.2129 40.1358 43.9849 39.9318 43.8529 39.6798C43.7209 39.4158 43.6729 39.1398 43.7089 38.8518C43.7449 38.5638 43.8469 38.3118 44.0149 38.0958C44.1829 37.8678 44.4049 37.7178 44.6809 37.6458C44.9569 37.5618 45.2689 37.5978 45.6169 37.7538C46.0729 37.9698 46.5889 38.1378 47.1649 38.2578C47.7409 38.3778 48.2809 38.4378 48.7849 38.4378C49.5769 38.4378 50.1289 38.3358 50.4409 38.1318C50.7649 37.9158 50.9269 37.6518 50.9269 37.3398C50.9269 37.0638 50.8129 36.8418 50.5849 36.6738C50.3689 36.5058 49.9789 36.3618 49.4149 36.2418L47.3089 35.7918C46.1569 35.5518 45.2989 35.1318 44.7349 34.5318C44.1709 33.9318 43.8889 33.1578 43.8889 32.2098C43.8889 31.5858 44.0149 31.0218 44.2669 30.5178C44.5309 30.0018 44.8969 29.5638 45.3649 29.2038C45.8449 28.8438 46.4089 28.5678 47.0569 28.3758C47.7169 28.1718 48.4489 28.0698 49.2529 28.0698C49.8769 28.0698 50.5069 28.1418 51.1429 28.2858C51.7909 28.4178 52.3489 28.6218 52.8169 28.8978C53.0929 29.0418 53.2909 29.2398 53.4109 29.4918C53.5309 29.7438 53.5789 30.0078 53.5549 30.2838C53.5309 30.5478 53.4349 30.7818 53.2669 30.9858C53.1109 31.1898 52.8949 31.3278 52.6189 31.3998C52.3549 31.4598 52.0369 31.4118 51.6649 31.2558C51.3169 31.0998 50.9209 30.9858 50.4769 30.9138C50.0449 30.8298 49.6249 30.7878 49.2169 30.7878C48.7729 30.7878 48.3949 30.8418 48.0829 30.9498C47.7709 31.0458 47.5309 31.1898 47.3629 31.3818C47.2069 31.5738 47.1289 31.7958 47.1289 32.0478C47.1289 32.2998 47.2309 32.5158 47.4349 32.6958C47.6509 32.8638 48.0409 33.0078 48.6049 33.1278L50.6929 33.5778C51.8569 33.8298 52.7269 34.2438 53.3029 34.8198C53.8789 35.3958 54.1669 36.1458 54.1669 37.0698C54.1669 37.6938 54.0409 38.2578 53.7889 38.7618C53.5369 39.2658 53.1769 39.6978 52.7089 40.0578C52.2409 40.4058 51.6769 40.6758 51.0169 40.8678C50.3569 41.0598 49.6129 41.1558 48.7849 41.1558Z"
                fill="white"
              />
              <rect
                x="51.5562"
                y="11.9578"
                width="4"
                height="56"
                rx="2"
                transform="rotate(45 51.5562 11.9578)"
                fill="white"
              />
            </svg>

            <h2 className="text-white d-inline ml-5">
              <span className="text-primary">Ad Free</span> learning experience
            </h2>
          </div>
        </div>
        {/* content 2 */}
        <div className="col col-md-5 mb-4">
          <form
            className="bg-white text-dark mt-4 p-3"
            style={{ width: "550px" }}
          >
            <div className="d-flex justify-content-around">
              <div className="d-inline">
                <button className="btn btn-primary rounded-circle ml-3">
                  1
                </button>
                <h5>Signup</h5>
              </div>

              <div className="d-inline">
                <button className="btn btn-primary rounded-circle ml-3">
                  2
                </button>
                <h5>Subscribe</h5>
              </div>
            </div>

            <h3 className="text-center mt-3 mb-3">
              Select your subcription plan
            </h3>
            {/* radio button 1 */}
            <div
              className="d-flex justify-content-around border mb-3 border-3  bg-secondary
            "
            >
              {/* badge */}
              <div
                style={{
                  display: "flex",
                  position: "absolute",
                  left: 90,
                }}
              >
                <span className="badge bg-danger p-3 py-1">Offer Expired</span>
              </div>

              <div className="form-check mt-4 mr-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  12 Months Subscripton
                </label>
              </div>
              <div>
                <h5>
                  Total <span>₹99</span>
                </h5>
                <p>₹8 /mon</p>
              </div>
            </div>
            {/* radio button 2 */}
            <div className="d-flex justify-content-around border border-success mb-3 border-3">
              {/* badge */}
              <div
                style={{
                  display: "flex",
                  position: "absolute",
                  left: 90,
                }}
              >
                <span className="badge bg-success p-3 py-1">Recommended</span>
              </div>
              <div className="form-check mt-4 mr-4 ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={(e) => {
                    setSelectedPlan("179");
                  }}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  12 Months Subscripton
                </label>
              </div>
              <div>
                <h5>
                  Total <span>₹179</span>
                </h5>
                <p>₹25 /mon</p>
              </div>
            </div>
            {/* radio button 3 */}
            <div className="d-flex justify-content-around border border-3  mb-3">
              <div class="form-check mt-4 mr-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  onChange={() => setSelectedPlan("149")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  6 Months Subscripton
                </label>
              </div>
              <div>
                <h5>
                  Total <span>₹149</span>
                </h5>
                <p>₹33 /mon</p>
              </div>
            </div>
            {/* radio button 4 */}
            <div className="d-flex justify-content-around border border-3  mb-3">
              <div className="form-check mt-4 mr-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  onChange={() => setSelectedPlan("99")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  3 Months Subscripton
                </label>
              </div>
              <div>
                <h5>
                  Total <span>₹99</span>
                </h5>
                <p>₹33 /mon</p>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-2">
              <h6>Subscription Fee</h6>
              <h6>₹18,500</h6>
            </div>

            {/* radio button 4 */}
            <div className="d-flex justify-content-around border mb-4 border-3 border-danger">
              <div className="form-check mt-2 mr-4 p-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label text-danger"
                  htmlFor="flexRadioDefault3"
                >
                  Limited Time Offer
                </label>
                <br />
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99998 5V11L14.2 14.1L15 12.9L10.5 10.2V5H8.99998ZM18 10V16H20V10H18ZM18 18V20H20V18H18ZM16 18C14.3 19.3 12.3 20 9.99998 20C4.49998 20 -1.52588e-05 15.5 -1.52588e-05 10C-1.52588e-05 4.5 4.49998 0 9.99998 0C14.8 0 18.9 3.4 19.8 8H17.7C16.8 4.6 13.7 2 9.99998 2C5.59998 2 1.99998 5.6 1.99998 10C1.99998 14.4 5.59998 18 9.99998 18C12.4 18 14.5 16.9 16 15.3V18Z"
                    fill="#DE4313"
                  />
                </svg>

                <h6 className="text-danger d-inline ml-2">
                  Offer valid till 25th March 2023{" "}
                </h6>
              </div>
              <div>
                <h5>- ₹ 18,401</h5>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <h6>Total (Incl. of 18% GST)</h6>
              <h3>₹ {selectedPlan - Math.ceil(30.6)}</h3>
            </div>
            {/* buttons */}
            <div className="d-flex justify-content-center">
              <button className="btn btn-outline-danger btn-lg mr-4 px-5">
                Cancel
              </button>
              <button className="btn btn-success text-white btn-lg px-5">
                Proceed to Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EdyodaHome;
