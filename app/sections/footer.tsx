export default function Footer() {
  return (
    <footer
      className="py-12 text-center text-gray-500
            border-t border-gray-200
            dark:border-white/10">
      Copyright © {(new Date()).getFullYear()} CoderMana Technologies Private Limited
    </footer>
  )
};
