export default function Home() {
	return (
		<main className="mt-header flex flex-col items-center px-base sm:mt-24">
			<section className="mx-auto flex w-full max-w-xl flex-col items-center sm:flex-row">
				<img
					className="sm:-rotate-8 w-64 shrink-0 rounded-card object-fill"
					src="https://cards.scryfall.io/large/front/f/5/f50843cc-20ac-4746-816e-f2630aa31594.jpg?1562941027"
					alt="Peek card"
				/>
				<div className="-mt-37 sm:-ml-12 w-full flex-1 rounded-sm bg-stone-700 px-12 py-8 sm:mt-0 sm:pl-20">
					<h1 className="font-bold text-6xl">Peek</h1>
					<p className="mt-8 font-medium">
						Search for cards, <br />
						build decks, <br />
						track your collection...
					</p>
					<p className="mt-12 font-medium">...all in one site!</p>
				</div>
			</section>
		</main>
	);
}
