import Heading from "../../shared/Heading";
import Button from "../../ui/Button";
import FeedBack from "./FeedBack";

const FeedBacks = () => {
  return (
    <section className="py-14">
      <div className="container relative pb-20">
        <Heading
          className="text-left"
          title={
            <span>
              OUR <span className="text-primary">CLIENT</span> SAY
            </span>
          }
          subTitle={
            <span>
              {`Here's`} what our{" "}
              <span className="text-primary">users speak</span> about us
            </span>
          }
        />

        <div className="flex mt-10 space-x-3">
          <div className="flex-1 space-y-3">
            <FeedBack feedback="The @mintlify team absolutely nailed combining docs search and AI Q&A in a delightful experience." />
            <FeedBack feedback="Mintlify is absolutely amazing! Their team has been such a pleasure to work with, and just look at our docs - they look gorgeous! I definitely think everyone should try Mintlify out!" />
            <FeedBack feedback="Mintlify is amazing for us! Even as a small team we struggled to keep up with dev and update the docs on changes. Now the docs are managed as code and are part of the dev process and PR. As an open source project - moving the docs to the repo (with zero effort) also enabled our community to help us maintain and fix problems as contributors. Our devs and our users love it." />
          </div>
          <div className="flex-1 space-y-3">
            <FeedBack feedback="This is a must-have if you're building any kind of developer tools. We used other options in the past, which feels outdated in terms of look-n-feel when compared to Mintlify. The team helped us set up two different websites and even migrated all the content for us. I can't recommend it enough." />
            <FeedBack feedback="My team loves Mintlify! Great product and a super supportive team." />
            <FeedBack feedback="Mintlify was the only option that checked all the boxes. To get the look, feel, and features we wanted for our documentation, it had to be homegrown or Mintlify." />
          </div>
          <div className="flex-1 space-y-3">
            <FeedBack feedback="My team loves Mintlify! Great product and a super supportive team." />
            <FeedBack feedback="Mintlify is amazing for us! Even as a small team we struggled to keep up with dev and update the docs on changes. Now the docs are managed as code and are part of the dev process and PR. As an open source project - moving the docs to the repo (with zero effort) also enabled our community to help us maintain and fix problems as contributors. Our devs and our users love it." />
            <FeedBack feedback="Mintlify is absolutely amazing! Their team has been such a pleasure to work with, and just look at our docs - they look gorgeous! I definitely think everyone should try Mintlify out!" />
          </div>
          <div className="flex-1 space-y-3">
            <FeedBack feedback="Mintlify is amazing for us! Even as a small team we struggled to keep up with dev and update the docs on changes. Now the docs are managed as code and are part of the dev process and PR. As an open source project - moving the docs to the repo (with zero effort) also enabled our community to help us maintain and fix problems as contributors. Our devs and our users love it." />
            <FeedBack feedback="Mintlify is absolutely amazing! Their team has been such a pleasure to work with, and just look at our docs - they look gorgeous! I definitely think everyone should try Mintlify out!" />
            <FeedBack feedback="Mintlify is absolutely amazing! Their team has been such a pleasure to work with, and just look at our docs - they look gorgeous! I definitely think everyone should try Mintlify out!" />
          </div>
          <div className="flex-1 space-y-3">
            <FeedBack feedback="The @mintlify team absolutely nailed combining docs search and AI Q&A in a delightful experience." />
            <FeedBack feedback="Mintlify is absolutely amazing! Their team has been such a pleasure to work with, and just look at our docs - they look gorgeous! I definitely think everyone should try Mintlify out!" />
            <FeedBack feedback="My team loves Mintlify! Great product and a super supportive team." />
            <FeedBack feedback="The @mintlify team absolutely nailed combining docs search and AI Q&A in a delightful experience." />
          </div>
        </div>

        <div className="w-full absolute bottom-0 left-0 right-0">
          <div className="bg-gradient-to-t h-[370px] from-white to-white/40 w-full flex items-end justify-center">
            <Button className="py-2 px-4 rounded-full bg-transparent border border-border text-black font-normal">
              Show more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBacks;
