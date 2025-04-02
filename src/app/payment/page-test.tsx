export const runtime = "edge";
type Props = {
  searchParams: Promise<{
    canceled: string;
  }>;
};
export default async function IndexPage({ searchParams }: Props) {
  const { canceled } = await searchParams;

  if (canceled) {
    console.log(
      "Order canceled -- continue to shop around and checkout when you’re ready."
    );
  }
  return (
    <form action="/api/checkout_sessions" method="POST">
      <section>
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
    </form>
  );
}
