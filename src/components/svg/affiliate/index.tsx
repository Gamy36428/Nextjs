import React from 'react';

const AccesoriesIcon = ({ ...props }) => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    {...props}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.19648 0.0656357C2.04334 0.100639 1.75018 0.210026 1.54016 0.310661C0.621315 0.752583 0 1.75894 0 2.80029C0 4.38421 1.36952 5.68372 2.93593 5.58746C3.3166 5.56121 3.87665 5.40807 4.09543 5.26368L4.20919 5.19367L4.89176 5.87624C5.41681 6.40129 5.56996 6.57631 5.53495 6.62444C4.87863 7.53891 4.54172 8.27399 4.32295 9.26722C4.18731 9.87978 4.18731 11.1224 4.32295 11.735C4.54172 12.7282 4.87863 13.4633 5.53495 14.3778C5.56996 14.4259 5.41681 14.6009 4.89176 15.126L4.20919 15.8085L4.09543 15.7385C4.03417 15.6991 3.8329 15.616 3.64913 15.5504C1.63205 14.8766 -0.380665 16.6924 0.0656318 18.7882C0.380665 20.2802 1.88582 21.256 3.3866 20.9366C4.70799 20.6565 5.66622 19.4051 5.58746 18.0663C5.5612 17.6856 5.40806 17.1255 5.26367 16.9068L5.19367 16.793L5.87624 16.1104C6.40567 15.581 6.57631 15.4322 6.62444 15.4672C7.56079 16.1323 8.38337 16.4998 9.38535 16.6967C9.92353 16.8061 11.0305 16.8061 11.5731 16.7011C12.4744 16.5261 13.3626 16.1629 14.0583 15.6816C14.2465 15.5547 14.4171 15.4454 14.4303 15.4454C14.4478 15.4454 14.7628 15.7473 15.1347 16.1192C15.7954 16.7799 15.8041 16.793 15.7385 16.8936C15.5985 17.108 15.441 17.69 15.4147 18.0663C15.3841 18.5607 15.476 18.9939 15.7166 19.4708C16.0842 20.2015 16.8149 20.7659 17.6156 20.9366C19.5845 21.3522 21.3522 19.5845 20.9366 17.6156C20.6565 16.2898 19.4095 15.336 18.0663 15.4147C17.69 15.441 17.108 15.5985 16.8936 15.7385C16.793 15.8041 16.7799 15.7954 16.1061 15.1216C15.5854 14.5965 15.4322 14.4259 15.4672 14.3778C16.4036 13.0739 16.7799 11.9625 16.7799 10.5011C16.7799 9.03969 16.4036 7.92833 15.4672 6.62444C15.4322 6.57631 15.5854 6.40129 16.1104 5.87624L16.793 5.19367L16.9068 5.26368C17.1255 5.40807 17.6856 5.56121 18.0663 5.58746C19.147 5.65309 20.2234 5.0274 20.6915 4.06042C21.1028 3.21159 21.1028 2.389 20.6915 1.54016C20.2496 0.621319 19.2433 3.8147e-06 18.2019 3.8147e-06C16.618 3.8147e-06 15.3185 1.36952 15.4147 2.93593C15.441 3.3166 15.5941 3.87666 15.7385 4.09543L15.8085 4.20919L15.126 4.89176C14.6009 5.41682 14.4259 5.56996 14.3777 5.53495C13.4633 4.87864 12.7282 4.54173 11.735 4.32295C11.1224 4.18731 9.87978 4.18731 9.26722 4.32295C8.27399 4.54173 7.53891 4.87864 6.62444 5.53495C6.57631 5.56996 6.40129 5.41682 5.87624 4.89176L5.19367 4.20919L5.26367 4.09543C5.40806 3.87666 5.5612 3.3166 5.58746 2.93593C5.61809 2.44151 5.5262 2.00834 5.28555 1.53141C4.72549 0.411297 3.43473 -0.201267 2.19648 0.0656357ZM3.37348 1.52704C3.67538 1.67143 3.86353 1.85082 4.02542 2.15273C4.16106 2.39775 4.17418 2.46338 4.17418 2.77842C4.17856 3.21159 4.0648 3.48724 3.77164 3.77602C3.46974 4.07355 3.20721 4.17856 2.77841 4.17856C2.46338 4.17419 2.39775 4.16106 2.15272 4.02542C1.85082 3.8679 1.6758 3.67976 1.52266 3.3691C1.38264 3.08032 1.38702 2.51151 1.53141 2.20961C1.71518 1.83332 2.06959 1.54454 2.47213 1.43953C2.68653 1.38265 3.16345 1.43078 3.37348 1.52704ZM18.7751 1.52704C19.077 1.67143 19.2651 1.85082 19.4314 2.15273C19.567 2.4065 19.5802 2.45901 19.5802 2.80029C19.5802 3.14158 19.567 3.19409 19.4314 3.44786C19.2651 3.75414 19.1251 3.88978 18.797 4.06042C18.4907 4.21794 17.9787 4.22669 17.6506 4.07793C17.3706 3.95104 17.0555 3.63163 16.9243 3.34723C16.7799 3.03657 16.7842 2.51589 16.933 2.20961C17.1168 1.83769 17.4712 1.54454 17.8737 1.43953C18.0881 1.38265 18.5651 1.43078 18.7751 1.52704ZM11.2668 5.66622C13.4151 6.01188 15.0472 7.68768 15.3579 9.86666C15.4847 10.7855 15.3272 11.7525 14.8984 12.6232C14.6797 13.0782 14.369 13.5595 14.299 13.5639C14.2815 13.5639 14.2246 13.4808 14.1721 13.3758C13.8658 12.772 13.3189 12.2119 12.5663 11.7437C12.5576 11.735 12.6407 11.6037 12.7501 11.4506C13.3889 10.5536 13.472 9.52099 12.9907 8.53214C12.8463 8.23461 12.737 8.09022 12.4525 7.81019C11.9144 7.27639 11.3849 7.04449 10.6324 7.00948C10.0767 6.98761 9.77039 7.05324 9.23221 7.31576C8.50589 7.6658 7.9327 8.414 7.76206 9.23221C7.60017 10.0023 7.81456 10.9036 8.31337 11.5293C8.38337 11.6212 8.44463 11.7087 8.44463 11.7262C8.44463 11.7437 8.31774 11.8444 8.16022 11.945C7.65705 12.2732 7.20638 12.772 6.79508 13.4677L6.70757 13.6164L6.54131 13.3801C5.96375 12.5838 5.60058 11.4768 5.60058 10.5273C5.60058 8.04209 7.45578 5.9375 9.91041 5.63121C10.2386 5.58746 10.908 5.60496 11.2668 5.66622ZM11.0918 8.53652C12.1288 9.02657 12.1681 10.4661 11.1574 11.0218C10.8949 11.1662 10.8468 11.1793 10.5011 11.1793C10.1598 11.1793 10.1029 11.1662 9.85353 11.0305C8.76404 10.4398 8.89093 8.8953 10.0635 8.47089C10.3392 8.37025 10.8074 8.40088 11.0918 8.53652ZM11.0612 12.6713C11.9494 12.8507 12.737 13.4939 13.0651 14.3077C13.1964 14.6359 13.2183 14.6053 12.6801 14.8809C11.3237 15.5679 9.73101 15.5679 8.33524 14.8809C7.76206 14.6009 7.78394 14.6447 7.98958 14.2159C8.38337 13.402 9.06594 12.8551 9.92353 12.6713C10.3129 12.5882 10.6542 12.5882 11.0612 12.6713ZM3.3516 16.9286C3.63163 17.0555 3.95104 17.3706 4.07792 17.6506C4.15231 17.8256 4.17856 17.9525 4.17418 18.2238C4.17418 18.5388 4.16106 18.6044 4.02979 18.8495C3.86353 19.1557 3.72351 19.287 3.39535 19.462C3.20721 19.5583 3.11532 19.5758 2.80029 19.5758C2.45901 19.5802 2.4065 19.567 2.15272 19.4314C1.85082 19.2695 1.6758 19.0814 1.52266 18.7707C1.38264 18.4819 1.38702 17.9131 1.53141 17.6112C1.71518 17.2349 2.06959 16.9461 2.47213 16.8411C2.68653 16.7843 3.1197 16.828 3.3516 16.9286ZM18.7751 16.9286C19.077 17.073 19.2651 17.2524 19.4314 17.5543C19.567 17.8081 19.5802 17.8606 19.5802 18.2019C19.5802 18.5432 19.567 18.5957 19.4314 18.8495C19.2651 19.1557 19.1251 19.287 18.797 19.462C18.6088 19.5583 18.5169 19.5758 18.2019 19.5758C17.8606 19.5802 17.8081 19.567 17.5543 19.4314C17.0599 19.1645 16.8324 18.7795 16.828 18.2238C16.8236 17.8037 16.9286 17.5368 17.2087 17.248C17.5237 16.9243 17.8562 16.793 18.2938 16.8193C18.46 16.8324 18.6657 16.8805 18.7751 16.9286Z"
      fill="currentColor"
    />
  </svg>
);
export default AccesoriesIcon;