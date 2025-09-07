export function Form({
  method = "post",
  action = "/login",
  className,
  children,
  onSubmit,
}) {
  return (
    <form
      className={className}
      method={method}
      action={action}
      noValidate
      onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export function FormGroup({ children, className = "form-group" }) {
  return <div className={className}>{children}</div>;
}

export function Label({ htmlFor, className, children }) {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export function Input({ id, type = "text", ...props }) {
  return <input id={id} type={type} {...props} />;
}

export function Checkbox({ id, label, className }) {
  return (
    <div>
      <input className={className} type="checkbox" id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export function Button({ type = "button", className, children }) {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
}
