import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <ul className="mt-10">
        <li>
          <Link href={"/dashboard/users"}>User</Link>
        </li>
        <li>
          <Link href={"/dashboard/analytics"}>Analytic</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
