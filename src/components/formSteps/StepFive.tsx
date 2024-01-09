import AnimatedDiv from "@components/AnimatedDiv";
import CongratsIcon from "@assets/congrats.svg";

export default function StepFive() {
  return (
    <AnimatedDiv
      className="flex min-h-[396px] flex-col items-center justify-center text-center"
      direction={1}
    >
      <img src={CongratsIcon} alt="" />
      <h2 className="mb-7 mt-4 text-2xl font-semibold">Congratulations! 🎉</h2>
      <p className="max-w-[474px] text-sm text-myGray-500">
        Your profile has been created and you are now ready to start
        participating in challenges that match your interests and coding
        experience level.
      </p>
    </AnimatedDiv>
  );
}
