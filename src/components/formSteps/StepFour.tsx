import { FormInputsT } from "@/formSchema";
import AnimatedDiv from "@components/AnimatedDiv";
import { useFormContext } from "react-hook-form";

export default function StepFour({ direction }: { direction: number }) {
  const { getValues } = useFormContext<FormInputsT>();
  const allValues = getValues();
  return (
    <AnimatedDiv className="flex flex-col gap-7" direction={direction}>
      <div>
        <h2 className="mb-2 text-2xl font-medium">Review and Confirm</h2>
        <p className="text-sm text-myGray-500">
          Please review your information to make sure everything is accurate.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3 ">
        <ReviewCard title="Full Name" details={allValues.fullName} />
        <ReviewCard title="Email Address" details={allValues.email} />
        <ReviewCard title="Phone Number" details={allValues.phoneNumber} />
        {allValues.portfolioGithubLink ? (
          <ReviewCard
            title="Portfolio/GitHub Link"
            details="github.com/rishipurwar1"
          />
        ) : null}
        <ReviewCard title="Skill Level" details={allValues.skillLevel} />
        <ReviewCard title="Challenge Preference">
          <ul>
            {allValues.challengePref.map((challenge) => (
              <li key={challenge} className="font-medium">
                {challenge}
              </li>
            ))}
          </ul>
        </ReviewCard>
      </div>
    </AnimatedDiv>
  );
}

function ReviewCard({
  title,
  details,
  children,
}: {
  title: string;
  details?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[70px] flex-col justify-center gap-1 rounded-[10px] bg-myGray-100 px-3 py-2 text-xs">
      <div className="text-myGray-600">{title}</div>
      {details ? (
        <div className="break-words font-medium">{details}</div>
      ) : null}
      {children ? children : null}
    </div>
  );
}
