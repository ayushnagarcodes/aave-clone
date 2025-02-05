function Cta() {
  return (
    <section className="section-styles">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row w-full rounded-xl overflow-hidden">
          <div className="relative w-full md:w-1/3 bg-[--bg-5] flex flex-col p-12 gap-3">
            <h2
              style={{ fontFeatureSettings: '"ss01" on' }}
              className="!text-2xl !leading-[135%] !tracking-[-0.48px]"
            >
              Stay Updated
            </h2>
            <p
              style={{ fontFeatureSettings: '"ss01" on,"ss03" on,"cv11" on' }}
              className="text-[--fg-2] leading-[150%] tracking-[-.18px]"
            >
              Be the first to hear Aave protocol news.
            </p>
          </div>

          <div className="w-full md:w-2/3 bg-[--bg-4] p-12 flex flex-col gap-2">
            <label
              className="h-8 flex items-center gap-1.5 font-medium"
              htmlFor="cta-email"
            >
              Email
              <div className="bg-[--purple] mt-[1px] w-1.5 min-w-1.5 h-1.5 min-h-1.5 rounded-md flex-[0_1]"></div>
            </label>
            <div className="flex w-full gap-1">
              <input
                id="cta-email"
                type="email"
                placeholder="ronnie@aave.com"
                style={{ fontFeatureSettings: '"cv11" on' }}
                className="w-full border-none flex py-2.5 px-4 items-center gap-2 self-stretch h-10 rounded-[20px_6px_6px_20px] bg-white text-[--fg-1] leading-[150%] tracking-[-0.18px] focus:outline-none"
              />
              <button className="inline-block relative rounded-[6px_20px_20px_6px] h-10 px-4 bg-[--fg-1] no-underline font-medium leading-[105%] tracking-[-0.09px] text-[--bg-1] transition-all duration-[0.15s] ease-in cursor-pointer hover:opacity-80">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
