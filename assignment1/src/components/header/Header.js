import React from 'react'
import './header.scss';
import './animations.scss'



const Header = () => {
  return (
    <div className='container'>
      <header>


        <div class="header-content" id="home">
          <h1>Hello,</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. </p>
        </div>

        <figure>
          <svg width="718" height="454" viewBox="0 0 718 454" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="undraw_proud_coder_re_exuy 1" clip-path="url(#clip0_2_2)">
              <g id="leg">
                <path id="Vector" d="M121.414 452.305L114.093 448.484L116.394 440.89L109.439 446.055L90.0206 435.921C89.0898 435.435 88.3386 434.664 87.8767 433.721C87.4149 432.779 87.2665 431.713 87.4533 430.68C87.6401 429.646 88.1522 428.7 88.915 427.978C89.6777 427.257 90.6511 426.798 91.6931 426.669L112.789 424.053L116.437 417.065L132.239 426.551L121.414 452.305Z" fill="#2F2E41" />
              </g>
              <g id="hand">
                <path id="Vector_2" d="M143.208 19.4069L160.589 43.7065L168.222 36.7973L156.565 10.677C156.692 8.82087 156.299 6.96607 155.43 5.32112C154.561 3.67617 153.25 2.3063 151.645 1.36554C150.039 0.424765 148.204 -0.0496167 146.344 -0.00427696C144.484 0.0410627 142.673 0.604326 141.116 1.62219C139.558 2.64005 138.316 4.07215 137.528 5.7575C136.74 7.44285 136.437 9.31462 136.655 11.1624C136.872 13.0102 137.601 14.7607 138.758 16.2171C139.916 17.6736 141.457 18.7782 143.208 19.4069H143.208Z" fill="#FFB6B6" />
              </g>
              <g id="all">
                <path id="Vector_3" d="M271.986 71.4765C271.492 72.1143 270.808 72.5793 270.033 72.8052C269.259 73.031 268.432 73.0061 267.672 72.734C267.441 72.6656 267.215 72.5829 266.994 72.4864C267.243 69.8191 267.119 67.1301 266.626 64.497C266.433 66.7603 265.879 68.9782 264.987 71.0672C264.259 70.3376 263.664 69.4875 263.227 68.5545C262.413 66.6238 261.873 64.5886 261.624 62.5082C260.419 55.4201 259.231 48.0461 261.196 41.1192C264.075 31.0002 273.153 23.7257 276.945 13.908L278.813 12.231C282.011 17.6764 282.153 24.443 280.849 30.6177C279.552 36.8047 276.94 42.6114 274.874 48.578C272.808 54.5445 271.261 60.891 272.219 67.1344C272.439 68.6044 272.775 70.2201 271.986 71.4765Z" fill="#2F2E41" />
                <path id="Vector_4" d="M230.469 157.098L218.295 212.779L271.469 230.098L263.65 157.098H230.469Z" fill="#FFB6B6" />
                <path id="Vector_5" d="M485.849 153.13H434.843C434.121 153.131 433.43 153.419 432.92 153.929C432.411 154.44 432.125 155.133 432.126 155.854V236.428H488.573V155.854C488.573 155.496 488.503 155.142 488.366 154.811C488.229 154.481 488.028 154.18 487.775 153.927C487.522 153.674 487.222 153.474 486.891 153.337C486.561 153.2 486.206 153.13 485.849 153.13V153.13ZM460.517 198.911C458.922 198.904 457.395 198.267 456.267 197.139C455.139 196.011 454.502 194.483 454.494 192.888V183.595C454.497 181.999 455.132 180.469 456.261 179.341C457.391 178.213 458.921 177.579 460.517 177.579C462.113 177.579 463.644 178.213 464.773 179.341C465.903 180.469 466.538 181.999 466.54 183.595V192.888C466.533 194.483 465.896 196.011 464.768 197.139C463.64 198.267 462.112 198.904 460.517 198.911V198.911Z" fill="#3F3D56" />
                <path id="Vector_6" d="M570.309 27.3854H352.28C350.407 27.3884 348.611 28.1338 347.287 29.4584C345.962 30.7829 345.217 32.5785 345.214 34.4518V181.579C345.216 183.452 345.961 185.249 347.285 186.573C348.61 187.898 350.407 188.643 352.28 188.645H570.309C572.183 188.643 573.979 187.898 575.304 186.573C576.629 185.249 577.374 183.452 577.376 181.579V34.4518C577.373 32.5785 576.627 30.7829 575.303 29.4584C573.978 28.1338 572.182 27.3884 570.309 27.3854V27.3854Z" fill="#3F3D56" />
                <path id="Vector_7" d="M568.489 32.4893H354.102C353.099 32.4915 352.138 32.8914 351.429 33.6014C350.721 34.3113 350.323 35.2733 350.323 36.2763V179.757C350.324 180.758 350.723 181.718 351.432 182.427C352.14 183.135 353.1 183.534 354.102 183.536H568.489C569.491 183.534 570.451 183.135 571.16 182.427C571.868 181.718 572.267 180.758 572.268 179.757V36.2763C572.268 35.2733 571.87 34.3113 571.162 33.6014C570.453 32.8914 569.492 32.4915 568.489 32.4893Z" fill="white" />
                <path id="Vector_8" d="M431.951 233.851V241.625C431.951 242.027 432.112 242.413 432.397 242.698C432.681 242.983 433.068 243.143 433.47 243.144H487.228C487.631 243.142 488.016 242.982 488.301 242.697C488.585 242.412 488.746 242.027 488.748 241.625V233.851H431.951Z" fill="#3F3D56" />
                <path id="Vector_9" d="M526.73 245.849H399.181C398.832 245.849 398.488 245.771 398.172 245.621C397.857 245.471 397.579 245.253 397.359 244.981C397.14 244.71 396.983 244.393 396.901 244.054C396.819 243.715 396.814 243.361 396.885 243.02L398.865 233.62C398.977 233.094 399.266 232.623 399.684 232.284C400.102 231.945 400.622 231.759 401.16 231.757H524.752C525.289 231.759 525.81 231.945 526.228 232.284C526.645 232.623 526.935 233.094 527.047 233.62L529.026 243.02C529.098 243.361 529.093 243.715 529.011 244.054C528.929 244.393 528.772 244.71 528.552 244.981C528.332 245.253 528.055 245.471 527.739 245.621C527.424 245.771 527.079 245.849 526.73 245.849V245.849Z" fill="#3F3D56" />
                <path id="Vector_10" d="M405.506 233.45H402.554C402.285 233.45 402.066 233.668 402.066 233.938V235.318C402.066 235.588 402.285 235.807 402.554 235.807H405.506C405.776 235.807 405.994 235.588 405.994 235.318V233.938C405.994 233.668 405.776 233.45 405.506 233.45Z" fill="#E6E6E6" />
                <path id="Vector_11" d="M413.363 233.45H410.411C410.141 233.45 409.923 233.668 409.923 233.938V235.318C409.923 235.588 410.141 235.807 410.411 235.807H413.363C413.633 235.807 413.851 235.588 413.851 235.318V233.938C413.851 233.668 413.633 233.45 413.363 233.45Z" fill="#E6E6E6" />
                <path id="Vector_12" d="M421.22 233.45H418.268C417.998 233.45 417.779 233.668 417.779 233.938V235.318C417.779 235.588 417.998 235.807 418.268 235.807H421.22C421.489 235.807 421.708 235.588 421.708 235.318V233.938C421.708 233.668 421.489 233.45 421.22 233.45Z" fill="#E6E6E6" />
                <path id="Vector_13" d="M429.076 233.45H426.124C425.855 233.45 425.636 233.668 425.636 233.938V235.318C425.636 235.588 425.855 235.807 426.124 235.807H429.076C429.346 235.807 429.565 235.588 429.565 235.318V233.938C429.565 233.668 429.346 233.45 429.076 233.45Z" fill="#E6E6E6" />
                <path id="Vector_14" d="M436.933 233.45H433.981C433.712 233.45 433.493 233.668 433.493 233.938V235.318C433.493 235.588 433.712 235.807 433.981 235.807H436.933C437.203 235.807 437.421 235.588 437.421 235.318V233.938C437.421 233.668 437.203 233.45 436.933 233.45Z" fill="#E6E6E6" />
                <path id="Vector_15" d="M444.79 233.45H441.838C441.568 233.45 441.35 233.668 441.35 233.938V235.318C441.35 235.588 441.568 235.807 441.838 235.807H444.79C445.06 235.807 445.278 235.588 445.278 235.318V233.938C445.278 233.668 445.06 233.45 444.79 233.45Z" fill="#E6E6E6" />
                <path id="Vector_16" d="M452.647 233.45H449.695C449.425 233.45 449.207 233.668 449.207 233.938V235.318C449.207 235.588 449.425 235.807 449.695 235.807H452.647C452.916 235.807 453.135 235.588 453.135 235.318V233.938C453.135 233.668 452.916 233.45 452.647 233.45Z" fill="#E6E6E6" />
                <path id="Vector_17" d="M460.503 233.45H457.551C457.282 233.45 457.063 233.668 457.063 233.938V235.318C457.063 235.588 457.282 235.807 457.551 235.807H460.503C460.773 235.807 460.992 235.588 460.992 235.318V233.938C460.992 233.668 460.773 233.45 460.503 233.45Z" fill="#E6E6E6" />
                <path id="Vector_18" d="M468.36 233.45H465.408C465.139 233.45 464.92 233.668 464.92 233.938V235.318C464.92 235.588 465.139 235.807 465.408 235.807H468.36C468.63 235.807 468.848 235.588 468.848 235.318V233.938C468.848 233.668 468.63 233.45 468.36 233.45Z" fill="#E6E6E6" />
                <path id="Vector_19" d="M476.217 233.45H473.265C472.995 233.45 472.777 233.668 472.777 233.938V235.318C472.777 235.588 472.995 235.807 473.265 235.807H476.217C476.487 235.807 476.705 235.588 476.705 235.318V233.938C476.705 233.668 476.487 233.45 476.217 233.45Z" fill="#E6E6E6" />
                <path id="Vector_20" d="M484.074 233.45H481.122C480.852 233.45 480.634 233.668 480.634 233.938V235.318C480.634 235.588 480.852 235.807 481.122 235.807H484.074C484.343 235.807 484.562 235.588 484.562 235.318V233.938C484.562 233.668 484.343 233.45 484.074 233.45Z" fill="#E6E6E6" />
                <path id="Vector_21" d="M491.931 233.45H488.979C488.709 233.45 488.49 233.668 488.49 233.938V235.318C488.49 235.588 488.709 235.807 488.979 235.807H491.931C492.2 235.807 492.419 235.588 492.419 235.318V233.938C492.419 233.668 492.2 233.45 491.931 233.45Z" fill="#E6E6E6" />
                <path id="Vector_22" d="M499.787 233.45H496.835C496.566 233.45 496.347 233.668 496.347 233.938V235.318C496.347 235.588 496.566 235.807 496.835 235.807H499.787C500.057 235.807 500.275 235.588 500.275 235.318V233.938C500.275 233.668 500.057 233.45 499.787 233.45Z" fill="#E6E6E6" />
                <path id="Vector_23" d="M507.644 233.45H504.692C504.422 233.45 504.204 233.668 504.204 233.938V235.318C504.204 235.588 504.422 235.807 504.692 235.807H507.644C507.914 235.807 508.132 235.588 508.132 235.318V233.938C508.132 233.668 507.914 233.45 507.644 233.45Z" fill="#E6E6E6" />
                <path id="Vector_24" d="M515.501 233.45H512.549C512.279 233.45 512.061 233.668 512.061 233.938V235.318C512.061 235.588 512.279 235.807 512.549 235.807H515.501C515.77 235.807 515.989 235.588 515.989 235.318V233.938C515.989 233.668 515.77 233.45 515.501 233.45Z" fill="#E6E6E6" />
                <path id="Vector_25" d="M523.358 233.45H520.406C520.136 233.45 519.917 233.668 519.917 233.938V235.318C519.917 235.588 520.136 235.807 520.406 235.807H523.358C523.627 235.807 523.846 235.588 523.846 235.318V233.938C523.846 233.668 523.627 233.45 523.358 233.45Z" fill="#E6E6E6" />
                <path id="Vector_26" d="M405.413 237.378H402.461C402.192 237.378 401.973 237.597 401.973 237.866V239.247C401.973 239.516 402.192 239.735 402.461 239.735H405.413C405.683 239.735 405.901 239.516 405.901 239.247V237.866C405.901 237.597 405.683 237.378 405.413 237.378Z" fill="#E6E6E6" />
                <path id="Vector_27" d="M413.27 237.378H410.318C410.048 237.378 409.83 237.597 409.83 237.866V239.247C409.83 239.516 410.048 239.735 410.318 239.735H413.27C413.54 239.735 413.758 239.516 413.758 239.247V237.866C413.758 237.597 413.54 237.378 413.27 237.378Z" fill="#E6E6E6" />
                <path id="Vector_28" d="M421.127 237.378H418.175C417.905 237.378 417.687 237.597 417.687 237.866V239.247C417.687 239.516 417.905 239.735 418.175 239.735H421.127C421.396 239.735 421.615 239.516 421.615 239.247V237.866C421.615 237.597 421.396 237.378 421.127 237.378Z" fill="#E6E6E6" />
                <path id="Vector_29" d="M428.984 237.378H426.032C425.762 237.378 425.543 237.597 425.543 237.866V239.247C425.543 239.516 425.762 239.735 426.032 239.735H428.984C429.253 239.735 429.472 239.516 429.472 239.247V237.866C429.472 237.597 429.253 237.378 428.984 237.378Z" fill="#E6E6E6" />
                <path id="Vector_30" d="M436.84 237.378H433.888C433.619 237.378 433.4 237.597 433.4 237.866V239.247C433.4 239.516 433.619 239.735 433.888 239.735H436.84C437.11 239.735 437.329 239.516 437.329 239.247V237.866C437.329 237.597 437.11 237.378 436.84 237.378Z" fill="#E6E6E6" />
                <path id="Vector_31" d="M444.697 237.378H441.745C441.475 237.378 441.257 237.597 441.257 237.866V239.247C441.257 239.516 441.475 239.735 441.745 239.735H444.697C444.967 239.735 445.185 239.516 445.185 239.247V237.866C445.185 237.597 444.967 237.378 444.697 237.378Z" fill="#E6E6E6" />
                <path id="Vector_32" d="M452.554 237.378H449.602C449.332 237.378 449.114 237.597 449.114 237.866V239.247C449.114 239.516 449.332 239.735 449.602 239.735H452.554C452.824 239.735 453.042 239.516 453.042 239.247V237.866C453.042 237.597 452.824 237.378 452.554 237.378Z" fill="#E6E6E6" />
                <path id="Vector_33" d="M460.411 237.378H457.459C457.189 237.378 456.97 237.597 456.97 237.866V239.247C456.97 239.516 457.189 239.735 457.459 239.735H460.411C460.68 239.735 460.899 239.516 460.899 239.247V237.866C460.899 237.597 460.68 237.378 460.411 237.378Z" fill="#E6E6E6" />
                <path id="Vector_34" d="M468.267 237.378H465.315C465.046 237.378 464.827 237.597 464.827 237.866V239.247C464.827 239.516 465.046 239.735 465.315 239.735H468.267C468.537 239.735 468.756 239.516 468.756 239.247V237.866C468.756 237.597 468.537 237.378 468.267 237.378Z" fill="#E6E6E6" />
                <path id="Vector_35" d="M476.124 237.378H473.172C472.903 237.378 472.684 237.597 472.684 237.866V239.247C472.684 239.516 472.903 239.735 473.172 239.735H476.124C476.394 239.735 476.612 239.516 476.612 239.247V237.866C476.612 237.597 476.394 237.378 476.124 237.378Z" fill="#E6E6E6" />
                <path id="Vector_36" d="M483.981 237.378H481.029C480.759 237.378 480.541 237.597 480.541 237.866V239.247C480.541 239.516 480.759 239.735 481.029 239.735H483.981C484.251 239.735 484.469 239.516 484.469 239.247V237.866C484.469 237.597 484.251 237.378 483.981 237.378Z" fill="#E6E6E6" />
                <path id="Vector_37" d="M491.838 237.378H488.886C488.616 237.378 488.398 237.597 488.398 237.866V239.247C488.398 239.516 488.616 239.735 488.886 239.735H491.838C492.107 239.735 492.326 239.516 492.326 239.247V237.866C492.326 237.597 492.107 237.378 491.838 237.378Z" fill="#E6E6E6" />
                <path id="Vector_38" d="M499.694 237.378H496.742C496.473 237.378 496.254 237.597 496.254 237.866V239.247C496.254 239.516 496.473 239.735 496.742 239.735H499.694C499.964 239.735 500.183 239.516 500.183 239.247V237.866C500.183 237.597 499.964 237.378 499.694 237.378Z" fill="#E6E6E6" />
                <path id="Vector_39" d="M507.551 237.378H504.599C504.33 237.378 504.111 237.597 504.111 237.866V239.247C504.111 239.516 504.33 239.735 504.599 239.735H507.551C507.821 239.735 508.039 239.516 508.039 239.247V237.866C508.039 237.597 507.821 237.378 507.551 237.378Z" fill="#E6E6E6" />
                <path id="Vector_40" d="M515.408 237.378H512.456C512.186 237.378 511.968 237.597 511.968 237.866V239.247C511.968 239.516 512.186 239.735 512.456 239.735H515.408C515.678 239.735 515.896 239.516 515.896 239.247V237.866C515.896 237.597 515.678 237.378 515.408 237.378Z" fill="#E6E6E6" />
                <path id="Vector_41" d="M523.265 237.378H520.313C520.043 237.378 519.825 237.597 519.825 237.866V239.247C519.825 239.516 520.043 239.735 520.313 239.735H523.265C523.534 239.735 523.753 239.516 523.753 239.247V237.866C523.753 237.597 523.534 237.378 523.265 237.378Z" fill="#E6E6E6" />
                <path id="Vector_42" d="M470.624 242.092H440.174C439.904 242.092 439.686 242.311 439.686 242.58V243.961C439.686 244.231 439.904 244.449 440.174 244.449H470.624C470.894 244.449 471.113 244.231 471.113 243.961V242.58C471.113 242.311 470.894 242.092 470.624 242.092Z" fill="#E6E6E6" />
                <path id="Vector_43" d="M536.523 68.5077V144.028C536.522 149.085 534.513 153.935 530.937 157.511C527.361 161.088 522.511 163.097 517.453 163.098H422.933C419.212 163.098 415.572 162.011 412.461 159.97C409.35 157.928 406.903 155.022 405.423 151.608C404.927 150.479 404.549 149.303 404.293 148.098C406.302 148.875 408.439 149.272 410.593 149.268H505.113C509.774 149.261 514.241 147.407 517.537 144.111C520.832 140.816 522.687 136.348 522.693 131.688V56.1677C522.697 54.0133 522.3 51.8769 521.523 49.8677C522.729 50.1231 523.905 50.5018 525.033 50.9977C528.447 52.478 531.354 54.9243 533.395 58.0354C535.437 61.1465 536.524 64.7866 536.523 68.5077Z" fill="#F2F2F2" />
                <path id="Vector_44" d="M183.897 368.973L174.522 374.778L146.903 340.828L160.739 332.262L183.897 368.973Z" fill="#FFB6B6" />
                <path id="Vector_45" d="M191.991 381.099L184.449 384.466L179.925 377.947L179.656 386.605L159.654 395.534C158.696 395.962 157.625 396.073 156.599 395.849C155.573 395.626 154.646 395.08 153.952 394.292C153.258 393.505 152.834 392.515 152.742 391.469C152.65 390.424 152.895 389.376 153.441 388.479L164.489 370.317L161.275 363.119L178.523 356.622L191.991 381.099Z" fill="#2F2E41" />
                <path id="Vector_46" d="M157.635 362.442L173.469 347.098C161.705 318.069 160.765 300.075 144.457 264.967C183.15 272.881 210.813 272.4 242.813 265.304C253.646 262.94 281.598 241.348 279.3 230.277C279.193 229.76 279.066 229.247 278.919 228.739C275.485 217.028 277.903 199.094 270.469 186.098C256.714 180.912 235.816 198.423 219.469 209.098C211.586 214.245 217.356 221.259 211.469 223.098L188.9 230.424L133.527 221.481C130.851 221.075 128.121 221.203 125.495 221.858C122.868 222.512 120.398 223.679 118.225 225.293C116.052 226.907 114.219 228.935 112.834 231.26C111.448 233.585 110.536 236.161 110.151 238.84C110.057 239.441 109.989 240.046 109.947 240.653C112.495 254.757 115.151 268.49 118.01 281.527C118.933 285.735 117.375 293.802 120.846 293.922C124.317 294.042 122.919 302.386 124 306.465C130.654 331.579 134.863 343.733 157.635 362.442Z" fill="#2F2E41" />
                <path id="Vector_47" d="M127.329 429.745L117.562 424.647L133.015 383.711L147.43 391.235L127.329 429.745Z" fill="#FFB6B6" />
                <path id="Vector_48" d="M125.701 399.184L141.362 409.967C160.557 382.207 173.02 345.113 182.301 303.607C218.44 287.842 250.062 269.806 272.098 245.613C275.717 241.557 277.614 236.252 277.389 230.821C277.163 225.39 274.832 220.26 270.889 216.518C270.503 216.157 270.104 215.811 269.693 215.48C260.148 207.877 238.95 212.251 225.401 205.897L201.197 239.396L203.979 247.199L195.559 251.298L188.45 254.759L180.312 258.721L153.633 271.708C151.215 272.917 149.059 274.593 147.292 276.639C145.524 278.685 144.179 281.061 143.334 283.629C142.489 286.198 142.161 288.908 142.369 291.604C142.576 294.3 143.316 296.928 144.544 299.337C144.814 299.883 145.107 300.416 145.422 300.937L135.514 350.297C135.514 350.297 138.24 358.89 133.951 358.086C129.661 357.282 131.998 367.811 131.998 367.811L125.701 399.184Z" fill="#2F2E41" />
                <path id="Vector_49" d="M334.892 237.703L323.469 210.098L314.469 215.098L319.904 243.18C319.359 244.959 319.322 246.855 319.796 248.654C320.27 250.453 321.237 252.084 322.587 253.364C323.937 254.644 325.617 255.522 327.439 255.899C329.261 256.277 331.152 256.138 332.9 255.5C334.647 254.861 336.182 253.748 337.331 252.285C338.481 250.822 339.2 249.067 339.407 247.218C339.613 245.369 339.301 243.499 338.503 241.818C337.705 240.138 336.455 238.713 334.892 237.703V237.703Z" fill="#FFB6B6" />
                <path id="Vector_50" d="M221.697 173.421C210.423 190.907 251.725 229.007 273.469 220.098C277.276 218.538 290.373 213.385 281.421 206.241C272.469 199.098 282.459 207.092 282.695 202.442C282.853 199.333 280.446 192.513 282.957 192.805C285.469 193.098 286.91 185.834 281.44 183.984C279.538 183.305 277.87 182.097 276.63 180.503C275.39 178.909 274.63 176.994 274.44 174.984C273.917 155.817 280.408 135.806 280.408 135.806L306.906 203.541C306.906 203.541 306.71 215.26 310.089 211.679C313.469 208.098 313.223 219.688 313.223 219.688C313.223 219.688 318.247 223.195 315.358 225.146C312.469 227.098 318.469 233.098 318.469 233.098L332.469 232.098C332.469 232.098 332.249 221.698 329.859 219.398C327.469 217.098 328.643 213.479 328.643 213.479C328.643 213.479 323.714 208.895 326.592 203.496C329.469 198.098 305.64 101.535 305.64 101.535C304.686 96.8888 302.465 92.5974 299.224 89.1348C295.983 85.6722 291.847 83.1733 287.275 81.9142L272.154 77.7509L269.469 67.0977H248.177L244.469 74.0977L210.469 71.0977C210.469 71.0977 176.826 40.4878 178.469 38.0977C180.111 35.7076 174.896 30.1119 174.896 30.1119C174.896 30.1119 170.442 28.6542 172.955 27.8759C175.469 27.0976 170.718 25.2982 170.718 25.2982C170.718 25.2982 166.318 24.1421 168.394 22.6199C170.469 21.0977 161.469 20.0977 161.469 20.0977L149.791 29.6252L152.151 33.6271C152.151 33.6271 150.712 39.0765 152.59 37.0871C154.468 35.0977 154.822 40.8711 154.822 40.8711C154.822 40.8711 155.781 47.193 161.469 49.0977C167.156 51.0024 171.469 69.0977 171.469 69.0977L219.469 109.098C212.158 117.489 213.898 126.264 220.374 135.239L221.697 173.421Z" fill="#00BFA6" />
                <path id="Vector_51" d="M258.343 60.0195C271.076 60.0195 281.398 49.6971 281.398 36.9638C281.398 24.2305 271.076 13.9081 258.343 13.9081C245.609 13.9081 235.287 24.2305 235.287 36.9638C235.287 49.6971 245.609 60.0195 258.343 60.0195Z" fill="#FFB6B6" />
                <path id="Vector_52" d="M278.469 30.0977C277.879 30.2677 269.219 31.3977 265.469 32.0977C261.789 32.7877 261.149 28.0977 258.139 28.9777C258.14 28.9572 258.137 28.9366 258.129 28.9177C257.662 26.4327 256.865 24.0213 255.759 21.7477C256.16 23.9253 256.217 26.1523 255.929 28.3477C255.927 28.4048 255.92 28.4617 255.909 28.5177C255.899 28.6177 255.879 28.7077 255.869 28.8077C252.689 27.4077 250.669 28.6577 248.469 29.0977C246.009 29.5877 244.089 30.6677 245.469 39.0977C248.299 56.4377 263.019 62.6277 260.469 74.0977C259.969 76.3677 258.709 79.2077 257.129 79.9177C256.662 77.4327 255.865 75.0213 254.759 72.7477C255.16 74.9253 255.217 77.1523 254.929 79.3477C252.479 76.6977 250.709 67.4377 242.469 60.0977C240.439 58.2977 230.269 47.6177 229.049 45.0977C229.423 47.1125 229.604 49.1585 229.589 51.2077C229.591 52.5792 229.497 53.9492 229.309 55.3077C229.309 55.3952 229.299 55.4824 229.279 55.5677C229.269 55.7277 229.239 55.8677 229.219 56.0177C229.199 56.1877 229.169 56.3477 229.139 56.5177C225.809 56.0377 222.859 55.4577 221.469 54.0977C214.709 47.5177 222.959 34.6977 227.469 23.0977C233.919 6.48767 252.649 4.27768 254.469 4.09768C262.489 3.28768 276.039 5.00768 280.469 14.0977C283.569 20.4677 281.589 29.1977 278.469 30.0977Z" fill="#2F2E41" />
                <path id="Vector_53" d="M229.854 33.8469L246.555 7.86667C242.552 5.54308 237.994 4.34751 233.367 4.40706C231.06 4.45499 228.79 4.98838 226.703 5.97247C224.617 6.95656 222.761 8.36926 221.257 10.1185C217.847 14.3577 217.261 20.3503 218.539 25.6392C218.981 27.4658 227.385 21.0388 225.385 24.0388C223.743 26.3876 221.059 36.2603 220.385 39.0388C219.302 43.5106 216.322 48.1009 218.976 51.8593C222.115 56.3038 227.716 58.5129 233.153 58.7373C238.589 58.9617 243.94 57.4551 249.107 55.7486L229.854 33.8469Z" fill="#2F2E41" />
                <path id="Vector_54" d="M236.271 32.8223C236.03 32.822 235.797 32.7346 235.615 32.5761C235.433 32.4177 235.315 32.1988 235.281 31.96C235.248 31.7211 235.302 31.4783 235.434 31.2762C235.566 31.0742 235.766 30.9265 235.998 30.8604C236.26 30.4277 236.153 28.6069 236.066 27.1358C235.741 21.6118 235.197 12.3668 244.172 6.12599C244.39 5.9746 244.659 5.91589 244.92 5.96278C245.181 6.00966 245.412 6.1583 245.564 6.37599C245.715 6.59368 245.774 6.86258 245.727 7.12356C245.68 7.38454 245.531 7.6162 245.314 7.76759C237.259 13.3687 237.743 21.583 238.063 27.0181C238.245 30.1255 238.378 32.3701 236.493 32.7974C236.42 32.814 236.346 32.8224 236.271 32.8223Z" fill="#00BFA6" />
                <path id="Vector_55" d="M5.24436e-06 451.951C-0.000929715 452.265 0.123182 452.567 0.345022 452.791C0.566861 453.014 0.86826 453.14 1.18293 453.141H716.48C716.796 453.141 717.098 453.015 717.322 452.792C717.545 452.569 717.67 452.266 717.67 451.951C717.67 451.635 717.545 451.332 717.322 451.109C717.098 450.886 716.796 450.761 716.48 450.761H1.19004C1.03422 450.76 0.879853 450.79 0.735723 450.85C0.591593 450.909 0.460529 450.996 0.350027 451.106C0.239524 451.215 0.151746 451.346 0.0916953 451.49C0.0316442 451.634 0.000493399 451.788 3.57619e-05 451.944L5.24436e-06 451.951Z" fill="#CCCCCC" />
                <path id="Vector_56" d="M452.895 71.9255H424.06C423.861 71.926 423.664 71.8872 423.48 71.8114C423.296 71.7356 423.129 71.6242 422.988 71.4837C422.847 71.3431 422.735 71.1761 422.659 70.9923C422.582 70.8084 422.543 70.6113 422.543 70.4123C422.543 70.2132 422.582 70.0161 422.659 69.8323C422.735 69.6485 422.847 69.4815 422.988 69.3409C423.129 69.2003 423.296 69.089 423.48 69.0132C423.664 68.9373 423.861 68.8986 424.06 68.8991H452.895C453.296 68.8991 453.681 69.0585 453.965 69.3423C454.248 69.6261 454.408 70.011 454.408 70.4123C454.408 70.8136 454.248 71.1985 453.965 71.4823C453.681 71.7661 453.296 71.9255 452.895 71.9255V71.9255Z" fill="#00BFA6" />
                <path id="Vector_57" d="M455.265 80.7662C454.983 80.7664 454.707 80.6783 454.477 80.5142C454.248 80.3501 454.075 80.1183 453.983 79.8511C453.891 79.5839 453.885 79.2948 453.966 79.0241C454.047 78.7534 454.21 78.5146 454.433 78.3413L461.816 72.6022C462.113 72.3716 462.358 72.0819 462.537 71.7514C462.716 71.4209 462.824 71.0569 462.855 70.6824C462.886 70.3079 462.839 69.9311 462.716 69.5758C462.594 69.2205 462.399 68.8945 462.144 68.6185L455.946 61.9079C455.825 61.7772 455.731 61.624 455.669 61.457C455.608 61.2901 455.58 61.1126 455.587 60.9348C455.594 60.757 455.636 60.5823 455.71 60.4207C455.785 60.2591 455.89 60.1138 456.021 59.993C456.152 59.8722 456.305 59.7784 456.472 59.7168C456.639 59.6552 456.816 59.6271 456.994 59.6341C457.172 59.6411 457.347 59.6831 457.508 59.7576C457.67 59.8321 457.815 59.9377 457.936 60.0684L467.141 70.0332C467.268 70.1711 467.366 70.3339 467.427 70.5113C467.488 70.6887 467.512 70.8769 467.496 71.064C467.481 71.251 467.427 71.4328 467.338 71.5979C467.248 71.763 467.126 71.9077 466.978 72.0229L456.096 80.4811C455.859 80.6661 455.566 80.7664 455.265 80.7662Z" fill="#00BFA6" />
                <path id="Vector_58" d="M422.601 80.7662C422.883 80.7664 423.159 80.6783 423.389 80.5142C423.619 80.3501 423.792 80.1183 423.883 79.8511C423.975 79.5839 423.981 79.2948 423.9 79.0241C423.82 78.7534 423.656 78.5146 423.433 78.3413L416.05 72.6022C415.753 72.3716 415.508 72.0819 415.329 71.7514C415.15 71.4209 415.042 71.0569 415.011 70.6824C414.98 70.3079 415.027 69.9311 415.15 69.5758C415.272 69.2205 415.467 68.8945 415.722 68.6185L421.921 61.9079C422.042 61.7772 422.135 61.624 422.197 61.457C422.259 61.2901 422.287 61.1126 422.28 60.9348C422.273 60.757 422.231 60.5823 422.156 60.4207C422.082 60.2591 421.976 60.1138 421.845 59.993C421.715 59.8722 421.561 59.7784 421.395 59.7168C421.228 59.6552 421.05 59.6271 420.872 59.6341C420.694 59.6411 420.52 59.6831 420.358 59.7576C420.197 59.8321 420.051 59.9377 419.93 60.0684L410.725 70.0332C410.598 70.1711 410.5 70.3339 410.439 70.5113C410.378 70.6887 410.355 70.8769 410.37 71.064C410.385 71.251 410.439 71.4328 410.529 71.5979C410.618 71.763 410.741 71.9077 410.889 72.0229L421.77 80.4811C422.007 80.6661 422.3 80.7664 422.601 80.7662V80.7662Z" fill="#00BFA6" />
                <path id="Vector_59" d="M467.801 132.906H438.966C438.565 132.906 438.18 132.746 437.896 132.462C437.613 132.179 437.453 131.794 437.453 131.392C437.453 130.991 437.613 130.606 437.896 130.322C438.18 130.038 438.565 129.879 438.966 129.879H467.801C468.202 129.879 468.587 130.038 468.871 130.322C469.155 130.606 469.314 130.991 469.314 131.392C469.314 131.794 469.155 132.179 468.871 132.462C468.587 132.746 468.202 132.906 467.801 132.906V132.906Z" fill="#00BFA6" />
                <path id="Vector_60" d="M472.882 140.391C472.599 140.391 472.324 140.303 472.094 140.139C471.864 139.975 471.691 139.743 471.599 139.476C471.508 139.209 471.502 138.92 471.582 138.649C471.663 138.378 471.826 138.139 472.049 137.966L479.433 132.227C479.729 131.996 479.975 131.707 480.154 131.376C480.333 131.046 480.441 130.682 480.472 130.307C480.503 129.933 480.455 129.556 480.333 129.201C480.21 128.845 480.016 128.519 479.761 128.243L473.562 121.533C473.441 121.402 473.347 121.249 473.286 121.082C473.224 120.915 473.196 120.738 473.203 120.56C473.21 120.382 473.252 120.207 473.327 120.046C473.401 119.884 473.507 119.739 473.637 119.618C473.768 119.497 473.921 119.403 474.088 119.342C474.255 119.28 474.433 119.252 474.61 119.259C474.788 119.266 474.963 119.308 475.125 119.382C475.286 119.457 475.431 119.563 475.552 119.693L484.758 129.658C484.885 129.796 484.982 129.959 485.043 130.136C485.105 130.314 485.128 130.502 485.113 130.689C485.098 130.876 485.043 131.058 484.954 131.223C484.865 131.388 484.742 131.533 484.594 131.648L473.713 140.106C473.475 140.291 473.183 140.391 472.882 140.391Z" fill="#00BFA6" />
                <path id="Vector_61" d="M422.601 140.391C422.883 140.391 423.159 140.303 423.389 140.139C423.619 139.975 423.792 139.743 423.883 139.476C423.975 139.209 423.981 138.92 423.9 138.649C423.82 138.378 423.656 138.139 423.433 137.966L416.05 132.227C415.753 131.996 415.508 131.707 415.329 131.376C415.15 131.046 415.042 130.682 415.011 130.307C414.98 129.933 415.027 129.556 415.15 129.201C415.272 128.845 415.467 128.519 415.722 128.243L421.921 121.533C422.165 121.269 422.294 120.919 422.28 120.56C422.266 120.201 422.109 119.862 421.845 119.618C421.581 119.374 421.231 119.245 420.872 119.259C420.513 119.273 420.174 119.429 419.93 119.693L410.725 129.658C410.598 129.796 410.5 129.959 410.439 130.136C410.378 130.314 410.355 130.502 410.37 130.689C410.385 130.876 410.439 131.058 410.529 131.223C410.618 131.388 410.741 131.533 410.889 131.648L421.77 140.106C422.007 140.291 422.3 140.391 422.601 140.391V140.391Z" fill="#00BFA6" />
                <path id="Vector_62" d="M425.174 136.151L431.235 122.286C431.397 121.92 431.698 121.633 432.071 121.488C432.443 121.343 432.859 121.352 433.225 121.512C433.592 121.672 433.88 121.971 434.027 122.344C434.174 122.716 434.167 123.131 434.008 123.498L427.947 137.364C427.868 137.547 427.754 137.712 427.611 137.851C427.468 137.99 427.299 138.099 427.113 138.172C426.928 138.245 426.73 138.281 426.53 138.277C426.331 138.273 426.134 138.23 425.952 138.151C425.769 138.071 425.604 137.956 425.466 137.812C425.328 137.668 425.22 137.498 425.148 137.313C425.075 137.127 425.041 136.929 425.045 136.729C425.05 136.53 425.094 136.334 425.174 136.151V136.151Z" fill="#00BFA6" />
              </g>
              <g id="code">
                <path id="Vector_63" d="M442.535 94.8494H427.403C427.001 94.8494 426.616 94.69 426.333 94.4062C426.049 94.1225 425.889 93.7376 425.889 93.3363C425.889 92.9349 426.049 92.55 426.333 92.2663C426.616 91.9825 427.001 91.8231 427.403 91.8231H442.535C442.936 91.8231 443.321 91.9825 443.605 92.2663C443.889 92.55 444.048 92.9349 444.048 93.3363C444.048 93.7376 443.889 94.1225 443.605 94.4062C443.321 94.69 442.936 94.8494 442.535 94.8494V94.8494Z" fill="#00BFA6" />
                <path id="Vector_64" d="M469.772 94.8494H454.64C454.442 94.8494 454.245 94.8103 454.061 94.7343C453.878 94.6582 453.711 94.5468 453.57 94.4062C453.43 94.2657 453.318 94.0989 453.242 93.9153C453.166 93.7317 453.127 93.535 453.127 93.3363C453.127 93.1375 453.166 92.9408 453.242 92.7572C453.318 92.5736 453.43 92.4068 453.57 92.2663C453.711 92.1257 453.878 92.0143 454.061 91.9382C454.245 91.8622 454.442 91.8231 454.64 91.8231H469.772C469.971 91.8231 470.168 91.8622 470.352 91.9382C470.535 92.0143 470.702 92.1257 470.842 92.2663C470.983 92.4068 471.094 92.5736 471.171 92.7572C471.247 92.9408 471.286 93.1375 471.286 93.3363C471.286 93.535 471.247 93.7317 471.171 93.9153C471.094 94.0989 470.983 94.2657 470.842 94.4062C470.702 94.5468 470.535 94.6582 470.352 94.7343C470.168 94.8103 469.971 94.8494 469.772 94.8494Z" fill="#00BFA6" />
                <path id="Vector_65" d="M483.391 106.955H468.259C468.061 106.955 467.864 106.916 467.68 106.84C467.497 106.764 467.33 106.652 467.189 106.512C467.049 106.371 466.937 106.205 466.861 106.021C466.785 105.837 466.746 105.641 466.746 105.442C466.746 105.243 466.785 105.046 466.861 104.863C466.937 104.679 467.049 104.512 467.189 104.372C467.33 104.231 467.497 104.12 467.68 104.044C467.864 103.968 468.061 103.929 468.259 103.929H483.391C483.59 103.929 483.787 103.968 483.97 104.044C484.154 104.12 484.321 104.231 484.461 104.372C484.602 104.512 484.713 104.679 484.789 104.863C484.865 105.046 484.905 105.243 484.905 105.442C484.905 105.641 484.865 105.837 484.789 106.021C484.713 106.205 484.602 106.371 484.461 106.512C484.321 106.652 484.154 106.764 483.97 106.84C483.787 106.916 483.59 106.955 483.391 106.955Z" fill="#00BFA6" />
                <path id="Vector_66" d="M456.237 106.955H427.403C427.001 106.955 426.616 106.796 426.333 106.512C426.049 106.228 425.889 105.843 425.889 105.442C425.889 105.041 426.049 104.656 426.333 104.372C426.616 104.088 427.001 103.929 427.403 103.929H456.237C456.638 103.929 457.023 104.088 457.307 104.372C457.591 104.656 457.75 105.041 457.75 105.442C457.75 105.843 457.591 106.228 457.307 106.512C457.023 106.796 456.638 106.955 456.237 106.955V106.955Z" fill="#00BFA6" />
                <path id="Vector_67" d="M510.713 94.8494H481.878C481.477 94.8494 481.092 94.69 480.808 94.4062C480.524 94.1225 480.365 93.7376 480.365 93.3363C480.365 92.9349 480.524 92.55 480.808 92.2663C481.092 91.9825 481.477 91.8231 481.878 91.8231H510.713C510.911 91.8231 511.108 91.8622 511.292 91.9382C511.475 92.0143 511.642 92.1257 511.783 92.2663C511.923 92.4068 512.035 92.5736 512.111 92.7572C512.187 92.9408 512.226 93.1375 512.226 93.3363C512.226 93.535 512.187 93.7317 512.111 93.9153C512.035 94.0989 511.923 94.2657 511.783 94.4062C511.642 94.5468 511.475 94.6582 511.292 94.7343C511.108 94.8103 510.911 94.8494 510.713 94.8494Z" fill="#00BFA6" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_2_2">
                <rect width="717.67" height="453.964" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </figure>
      </header>

    </div>
  )
}

export default Header