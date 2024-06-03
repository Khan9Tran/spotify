export const BasicFooter = () => {
    return (
        <div className="wrapper--footer w-full h-24 flex items-center justify-center pl-7">
        <p className="footer--content text-center">
          This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy" className="underline"> Privacy Policy</a>
          <span> and </span>
          <a href="https://policies.google.com/terms" className="underline"> Terms of Service</a>
          <span> apply.</span>
        </p>
      </div>
    )
}