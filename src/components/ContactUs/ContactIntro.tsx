type ContactIntroProps = {
  showDescription?: boolean;
};

export default function ContactIntro({
  showDescription = true,
}: ContactIntroProps) {
  return (
    <div className="max-w-[680px] text-black">
      <h1 className="font-heading text-[20px] leading-[1.3] tracking-[0.6px] text-black md:text-[42px] lg:text-[42px] lg:tracking-[-0.02em]">
        Contact Us
      </h1>
      {showDescription && (
        <p className="mt-7 max-w-[620px] text-[17px] font-semibold leading-[1.55] text-black/60 sm:text-[19px]">
          For sales & partnership enquiries, fill the form below and our team will get in touch with you.
        </p>
      )}
    </div>
  );
}
