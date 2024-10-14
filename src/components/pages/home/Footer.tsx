export default function Footer() {
  return (
    <div className="footer footer-center bg-light-blue p-4 text-base-content">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <a
            href="https://www.linkedin.com/in/christianodavid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Christiano David
          </a>
        </p>
      </aside>
    </div>
  );
}
