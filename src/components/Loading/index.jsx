import prevload from "/prevload.svg";
const Loading = ({ className }) => (
  <div className={`loading ${className}`}>
    <img src={prevload} alt="loading" />
  </div>
);
export default Loading;
