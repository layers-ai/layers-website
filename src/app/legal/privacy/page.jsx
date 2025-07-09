/* eslint-disable @next/next/no-img-element */

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      {/* <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-savory-800 via-savory-400 to-phlox-500"> */}
      <Header />
      <main>
        <div className="bg-white px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Legal
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              layers: Privacy Policy
            </h1>
            <p className="italic mt-2">Last updated: July 29, 2024</p>
            <div className="mt-6 space-y-6 text-xl leading-8 text-gray-800">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  1. How layers values data privacy
                </h2>
                <p className="mt-4 font-light text-base">
                  At layers, we believe that technology and data present a
                  groundbreaking opportunity to empower people to take control
                  of their lives. The layers app gives people the ability to
                  enter data effortlessly through voice and helps them to
                  understand themselves better based on the provided journal
                  entries and other data, providing self-insight and
                  self-advocacy that’s powered by data processing.
                </p>
                <p className="mt-4 font-light text-base">
                  We also fully acknowledge the responsibility that comes with
                  being the safekeepers of so much intimate data which is
                  tracked by people using layers. This is why we are always
                  striving to achieve the highest standards of privacy and
                  security.{" "}
                  <strong>
                    Keeping your data safe is at the core of everything we do.
                  </strong>
                </p>
                <p className="mt-4 font-light text-base">
                  We see it as our job to be{" "}
                  <strong>
                    clear and transparent so that you can truly understand what
                    we do with your data
                  </strong>
                  , even though the digital ecosystem of an app is complex. To
                  provide our service as a health app, we rely on a number of
                  other providers as summarized below to help us.
                </p>
                <p className="mt-4 font-light text-base">
                  We use your data solely to provide and improve our services.{" "}
                  <strong>
                    Under no circumstances do we sell your data to advertisers
                    or any third parties. Your trust is paramount, and we are
                    committed to safeguarding your privacy.
                  </strong>
                </p>
                <p className="mt-4 font-light text-base">
                  To deliver the advanced AI-driven insights that layers
                  provides, we need to process your data in the cloud on our
                  secure servers. The sophisticated AI models we utilize are not
                  available on mobile devices, and as such, cannot operate on
                  mobile edge devices.{" "}
                  <strong>
                    We understand the importance of this responsibility and are
                    dedicated to building the safest and most privacy-friendly
                    software possible.
                  </strong>
                </p>
                <p className="mt-4 font-light text-base">
                  Please read the whole of this Privacy Policy to understand how
                  we handle your data. We have done our best to make it as clear
                  and comprehensible as possible. If you have any questions,
                  reach out to us at{" "}
                  <span class="email">
                    trust@layers<b>layers</b>journal<b>journal</b>.app
                  </span>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  2. The types of data we process
                </h2>
                <p className="mt-4 font-light text-base">
                  We process three types of data in order to provide our
                  services on the layers app and the layersjournal.app website.
                  All of our data is securely stored on servers located in the
                  European Union (EU).
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Account data:</strong> In order to create your layers
                  account, we process some of your personal data such as your
                  email address.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Usage data:</strong> In order to provide our services
                  and technically improve performance, we process how you
                  interact with our products using different data points. Such
                  data includes device data, which informs us about the device
                  you use to access our app services (such as device model, name
                  and identifiers, device settings, application identifier, and
                  crash information). On our website, we also collect
                  information about your browser (such as browser settings,
                  operating system, system settings). Other usage data includes
                  the IP address provided by your browser or mobile device,
                  which we collect in order to deliver the service to your
                  device. We also use the IP address to determine your
                  approximate location for statistical and analytics purposes
                  and for regulatory compliance in different countries. We do
                  not collect your precise location.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Journal data:</strong> In order to provide our service
                  as a self-reflection app, we process journal data and other
                  sensitive data that you choose to enter in the layers app.
                  Such journal data may include your daily journal entries, in
                  which you might share details about your day, answers to
                  specific questions or other entries about dreams. We only
                  process the journal data you choose to share with the layers
                  app.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  3. How and why we process your data
                </h2>
                <p className="mt-4 font-light text-base">
                  Data processing is essential to providing the service of
                  layers. Whenever you use our services, some personal and
                  non-personal data is collected, stored, and analyzed using
                  internal and third-party tools.
                </p>
                <p className="mt-4 font-light text-base">
                  Below are the <strong>purposes</strong> for which we process
                  your data, and the type of data that’s processed to fulfill
                  each purpose:
                </p>

                <h3 className="text-xl font-semibold mt-4">
                  3.1 To provide our core service to you
                </h3>
                <p className="mt-4 font-light text-base">
                  To provide our service, we process the following:
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Journal data:</strong> This is processed whenever you
                  enter your personal data (e.g. journal entries) in the layers
                  app, in order to provide our core service as a self-reflection
                  app. This includes both your journal entries and other
                  personal data (e.g. answers to specific questions or quizzes)
                  that you choose to provide to the layers app.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>
                    Device data, event data, usage data, IP address:
                  </strong>{" "}
                  This is processed when you use the layers app or
                  layersjournal.app, to understand how you interact with our
                  services and to technically improve performance.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Account data:</strong> This is processed when you set
                  up your layers account in the app, to enable you to sign in to
                  the layers app, and additionally to communicate with you on
                  service-related topics. Such communications may include
                  information about your account, essential app updates, or
                  insights and recommendations based on personal data you have
                  entered. These communications can be sent to you via
                  notifications or emails.
                </p>
                <p className="mt-4 font-light text-base">
                  Please read the following sections to understand which
                  third-party services, integrations, and partnerships we use to
                  provide our core service.
                </p>

                <h4 className="text-xl font-semibold mt-4">
                  3.1.1 Essential third-party providers:
                </h4>
                <p className="mt-4 font-light text-base">
                  We use several third-party providers to help us perform our
                  core services.
                </p>

                <p className="mt-4 font-light text-base">
                  <strong>Fly.io:</strong> layers uses Fly.io as our hosting
                  provider to store our data on secure servers. We only use
                  Fly.io data centers in the European Union. All data stored
                  with Fly.io is encrypted by layers.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>AWS S3:</strong> layers uses AWS S3 to store your
                  audio recordings on secure servers. We automatically delete
                  the recordings after 30 day. We only use AWS data centers in
                  the European Union. All data stored with AWS S3 is encrypted
                  by layers.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Mailerlite:</strong> layers uses services operated by{" "}
                  <a
                    href="https://www.mailerlite.com/"
                    className="text-savory-800 underline"
                    target="_blank"
                  >
                    Mailerlite
                  </a>
                  , a company based in the United States, to help us facilitate
                  communication with you via emails and to analyze how you
                  interacted with the emails. Such communications may include
                  information about your account, essential app updates, or
                  feedback requests. For this purpose, Mailerlite processes your
                  email address and potentially your name.
                </p>
                <p className="mt-4 font-light text-base">
                  Mailerlite has ensured an adequate level of data protection by
                  being listed under the EU-US Data Privacy Framework, and by
                  also entering into an agreement with layers based on the
                  Standard Contractual Clauses for data transfer between EU
                  countries and non-EU countries (see Section 4). The privacy
                  policy of these services can be found on their respective
                  websites.
                </p>
                <p className="mt-4 font-light text-base">
                  It is not possible to opt-out of layers as it is an essential
                  tool that we require in order to provide our services to you.
                  However, you can opt out of certain types of messaging from
                  layers, as explained in Section 3.6.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Sentry:</strong> layers uses services provided by
                  Sentry Inc. (
                  <a
                    href="https://www.sentry.io/"
                    className="text-savory-800 underline"
                    target="_blank"
                  >
                    Sentry
                  </a>
                  ), a company based in the United States, to carry out service
                  and infrastructure monitoring and alerting. Sentry helps us
                  monitor the application performance in real time and resolve
                  issues impacting our users quickly. Sentry stores the data on
                  EU servers.
                </p>
                <p className="mt-4 font-light text-base">
                  It is not possible to opt-out of Sentry as it is an essential
                  tool that we require in order to provide a functioning layers
                  app to you.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Sign in with Apple:</strong> layers uses “Sign in with
                  Apple” to allow users to create and sign in to their layers
                  account with their Apple credentials.
                </p>
                <p className="mt-4 font-light text-base">
                  If you sign up to layers using Apple, layers will exchange
                  certain data with Apple like device data, IP address, and
                  information you provided to Apple when creating an account
                  with Apple Inc. This may include a transfer of your personal
                  data to Apple servers located outside the European Union. It
                  is your choice if and to what extent you use the “Sign in with
                  Apple” service and what information you provide to Apple.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>OpenAI GPT:</strong> layers uses OpenAI GPT to provide
                  users with custom insights and advice. We share journal
                  entries and other journal data with OpenAI to generate custom
                  insights such as activities or to generate summaries. We do
                  not share any personal identifiable data such as emails or
                  names with OpenAI.{" "}
                  <strong>
                    OpenAI does not use any of the data shared for training
                    their models. Additionally, any data shared with OpenAI is
                    only processed but never stored on OpenAI&apos;s servers.
                  </strong>
                </p>
                <p className="mt-4 font-light text-base">
                  OpenAI has ensured an adequate level of data protection by
                  being listed under the EU-US Data Privacy Framework, and by
                  also entering into an agreement with layers based on the
                  Standard Contractual Clauses for data transfer between EU
                  countries and non-EU countries (see Section 4). The privacy
                  policy of these services can be found on their respective
                  websites.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Deepgram:</strong> layers uses Deepgram to transcribe
                  the audio files. To provide accurate transcription services,
                  we may share your audio recordings with Deepgram. The audio
                  recordings shared with Deepgram are exclusively used to
                  transcribe your audio into text accurately. Deepgram does not
                  use any of the data shared for training their models.
                  Additionally, any data shared with Deepgram is deleted within
                  a maximum of 30 days after processing.
                </p>
                <p className="mt-4 font-light text-base">
                  Deepgram has ensured an adequate level of data protection by
                  being listed under the EU-US Data Privacy Framework, and by
                  also entering into an agreement with layers based on the
                  Standard Contractual Clauses for data transfer between EU
                  countries and non-EU countries (see Section 4). The privacy
                  policy of these services can be found on their respective
                  websites.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Amplitude and Mixpanel:</strong> layers uses Amplitude
                  and Mixpanel to analyze user interactions within the app.
                  Amplitude and Mixpanel helps us understand how users engage
                  with different features, enabling us to optimize the user
                  experience. The data shared with Amplitude and Mixpanel is
                  pseudonymized and does not contain any personally identifiable
                  information.
                </p>
                <p className="mt-4 font-light text-base">
                  Amplitude and Mixpanel have ensured an adequate level of data
                  protection by being listed under the EU-US Data Privacy
                  Framework, and by also entering into an agreement with layers
                  based on the Standard Contractual Clauses for data transfer
                  between EU countries and non-EU countries (see Section 4). The
                  privacy policy of these services can be found on their
                  respective websites.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Superwall:</strong> layers uses Superwall to manage
                  paywalls and subscription-related user experiences. Superwall
                  helps us optimize our subscription flows and provide relevant
                  prompts to users. The data shared with Superwall is limited to
                  interactions related to subscription offers.
                </p>
                <p className="mt-4 font-light text-base">
                  Superwall has ensured an adequate level of data protection by
                  being listed under the EU-US Data Privacy Framework, and by
                  also entering into an agreement with layers based on the
                  Standard Contractual Clauses for data transfer between EU
                  countries and non-EU countries (see Section 4). The privacy
                  policy of this service can be found on the respective website.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Revenue Cat:</strong> layers uses Revenue Cat to
                  handle in-app subscriptions and purchases. RevenueCat enables
                  us to manage billing and subscription status across different
                  platforms. The data shared with RevenueCat includes
                  transaction details but does not include personally
                  identifiable information beyond what is necessary for
                  processing payments.
                </p>
                <p className="mt-4 font-light text-base">
                  Revenue Cat has ensured an adequate level of data protection
                  by being listed under the EU-US Data Privacy Framework, and by
                  also entering into an agreement with layers based on the
                  Standard Contractual Clauses for data transfer between EU
                  countries and non-EU countries (see Section 4). The privacy
                  policy of this service can be found on the respective website.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Vercel:</strong> layers uses Vercel to host the{" "}
                  <a
                    href="http://layersjournal.app"
                    className="text-savory-800 underline"
                  >
                    layersjournal.app
                  </a>{" "}
                  website.
                </p>

                <h3 className="text-xl font-semibold mt-4">
                  3.2 To help layers optimize their advertising efforts
                </h3>
                <p className="mt-4 font-light text-base">
                  To help us analyze how layers’ advertising performs, we
                  process certain types of usage data (for example when you
                  install the layers app or subscribe to layers premium)
                  including your device ID and IP address. This helps us
                  identify whether you’ve already downloaded layers or have a
                  layers premium subscription.
                </p>
                <p className="mt-4 font-light text-base">
                  By doing this, we can optimize our advertising efforts. For
                  example, if you’ve already downloaded the layers app, we won’t
                  show you an ad to download layers. It also helps us understand
                  on which platforms people find out about us, and learn what
                  kind of layers advertising performs best. With better
                  advertising, we can help raise awareness about the layers app.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Third party providers:</strong> We use certain
                  third-party services to help us with our advertising efforts.
                  These include Apple Search Ads and Google Ads, both based in
                  the United States, and Appsflyer.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Appsflyer:</strong> layers uses an in-app performance
                  and analysis service by{" "}
                  <a
                    href="https://www.appsflyer.com/"
                    className="text-savory-800 underline"
                    target="_blank"
                  >
                    Appsflyer
                  </a>
                  , a company based in the USA. They help us understand where
                  our users are coming from, which age group they are from, and
                  how they are interacting with our app, so that we can optimize
                  our ad campaigns. Appsflyer uses your advertising identifier
                  (Apple IDFA on iOS), and your IP addresses to provide us with
                  these insights. Through Appsflyer, we share standard app
                  events like installation of the layers app or subscription to
                  layers premium services with certain advertisement networks
                  like Reddit. We do this to avoid showing you layers ads if
                  you’ve already downloaded or are subscribed to layers premium.
                  Appsflyer does not have access to any of the personal health
                  data you track in the app. You can read more about how
                  Appsflyer handles data in their{" "}
                  <a
                    href="https://www.appsflyer.com/legal/services-privacy-policy/"
                    className="text-savory-800 underline"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Legal basis:</strong> The processing of your usage
                  data to promote layers is based on the following consent
                  according to Art 6 Sec.1 lit a) GDPR, if you have toggled this
                  on in your privacy settings:
                </p>
                <p className="mt-4 ml-4 font-light text-base italic">
                  I agree to my usage and device data being processed so layers
                  can optimize their advertising efforts to more effectively
                  tell more people about layers. Certain third-party providers,
                  including some located outside of the European Union, are used
                  to help with this.
                </p>
                <p className="mt-4 font-light text-base">
                  You can toggle this off at any time. All personal data
                  collected to help promote layers is deleted by us as soon as
                  it is no longer required for the purpose for which it was
                  collected.
                </p>

                <h3 className="text-xl font-semibold mt-4">
                  3.3 To improve layersjournal.app with website analytics
                </h3>
                <p className="mt-4 font-light text-base">
                  To improve our website, we process usage data such as your IP
                  address and device data. This helps us track the performance
                  of our website, understand how you use our website, and offer
                  you an improved experience. For this purpose, we use cookies
                  and third-party tracking services. Cookies are small text
                  files that are intended to make the site better for you to
                  use.
                </p>
                <p className="mt-4 font-light text-base">
                  In general, cookies are used to retain preferences, store
                  information for things like shopping carts, provide tracking
                  data to third-party applications like Google Analytics, or
                  identify your device for special advertising purposes such as
                  retargeting. You can learn more about the specific cookies and
                  tracking services used on layersjournal.com in Section 7.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Legal basis:</strong> The processing of your usage
                  data for website analytics is based on the following consent
                  according to Art 6 Sec.1 lit a) GDPR:
                </p>
                <p className="mt-4 ml-4 font-light text-base">
                  <em>
                    By using our website you consent through an opt-in in the
                    cookie banner that layers may use cookies and third-party
                    services, and collect your usage data under a unique
                    identifier for the purposes of tracking, analysis, and
                    improvement of our website.
                  </em>
                </p>
                <p className="mt-4 font-light text-base">
                  The usage of non-essential cookies on our website is based on
                  a consent according to § 25 of the German Telecommunication
                  and Telemedia Data Protection Act (TTDSG). When visiting our
                  website, you can decline the use of non-essential cookies in
                  the pop-up notification. If you consent to the non-essential
                  cookies, you may withdraw your consent again at any time in
                  your browser’s cookie settings.
                </p>
                <p className="mt-4 font-light text-base">
                  All personal data collected for website analytics is deleted
                  by us as soon as it is no longer required for the purpose for
                  which it was collected.
                </p>

                <h3 className="text-xl font-semibold mt-4">
                  3.4 To deliver layers newsletters
                </h3>
                <p className="mt-4 font-light text-base">
                  To provide newsletter and email services, we process certain
                  contact data of those people who have opted in so we can send
                  such communications.
                </p>
                <p className="mt-4 font-light text-base">
                  If you’ve registered for a newsletter service of layers
                  without being a layers app user with an account, we will
                  process your information provided in the registration on
                  layersjournal.app. This may include an email address, which is
                  needed to send you the newsletters you’ve subscribed to.
                </p>
                <p className="mt-4 font-light text-base">
                  If you’re a layers app user with an account, layers will
                  process the email address you provided with your account
                  registration to send you newsletters, as well as occasional
                  emails asking about feedback.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Third parties:</strong> layers may share information
                  such as your email address to third-party providers for the
                  sole purpose of carrying out our newsletter services. Our
                  current provider for this service is Mailerlite. For more
                  information about Mailerlite, see Section 3.1.1. Whenever data
                  is transferred outside of the European Economic Area (EEA), we
                  always apply the appropriate safeguards as outlined by the
                  General Data Protection Regulation (GDPR) (see Section 4).
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>Legal basis:</strong> The legal basis for sending you
                  our newsletter is based on your consent according to Art 6
                  Sec.1 lit a) GDPR. The legal basis for promotional emails is
                  based on Art 6 Sec.1 lit a) and lit f) GDPR.
                </p>
                <p className="mt-4 font-light text-base">
                  You can unsubscribe from our newsletters at any time by
                  clicking the unsubscribe link at the bottom of the emails.
                </p>
                <p className="mt-4 font-light text-base">
                  All personal data collected for providing our newsletter
                  services is deleted by us as soon as it is no longer required
                  for the purpose for which it was collected.
                </p>

                <h3 className="text-xl font-semibold mt-4">
                  4. Data transfer outside the European Union
                </h3>
                <p className="mt-4 font-light text-base">
                  Any personal data collected from you may only be transferred
                  to countries outside the European Economic Area (EEA) if we
                  observe applicable privacy regulations and ensure that your
                  privacy rights remain protected.
                </p>
                <p className="mt-4 font-light text-base">
                  To ensure an adequate level of data protection in accordance
                  with Art 46 GDPR, we use third-party providers that are
                  certified under the EU-US Data Privacy Framework as a
                  guarantee under Art 46 GDPR.
                </p>
                <p className="mt-4 font-light text-base">
                  We choose our processors very carefully. We do not work with
                  processors based in countries where we are concerned about the
                  rule of law with respect to privacy. We follow the guidance of
                  the European Data Protection Board on additional contractual
                  and technical measures to ensure a sufficient level of privacy
                  in different situations.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  5. Your data protection rights
                </h2>
                <p className="mt-4 font-light text-base">
                  We believe that privacy—including data privacy—is a{" "}
                  <a
                    href="https://www.ohchr.org/EN/Issues/DigitalAge/Pages/DigitalAgeIndex.aspx"
                    className="text-blue-500 underline"
                    target="_blank"
                  >
                    basic human right
                  </a>
                  . At layers, we strive to ensure that your rights are
                  respected.
                </p>
                <p className="mt-4 font-light text-base">
                  <strong>
                    Here are some key facts about your privacy that we would
                    like you to know:
                  </strong>
                </p>
                <ul className="list-disc list-inside mt-4 font-light text-base">
                  <li>
                    Our products and services have been designed to collect only
                    the data necessary to provide our services. We only collect
                    and process your data for the purposes outlined above and
                    detailed in this Privacy Policy.
                  </li>
                  <li>
                    The security of our servers is routinely verified by experts
                    to protect your data from unauthorized access. You can
                    contact us at{" "}
                    <span class="email">
                      trust@layers<b>layers</b>journal<b>journal</b>.app
                    </span>{" "}
                    if you have any questions about the security of our
                    services.
                  </li>
                  <li>
                    We do not retain your data in an identifiable format for
                    longer than necessary to deliver our services.
                  </li>
                  <li>
                    layers does not engage in any automated decision-making or
                    profiling activities.
                  </li>
                </ul>
                <p className="mt-4 font-light text-base">
                  <strong>
                    As a user of the layers app and website, you may exercise
                    your rights under the EU General Data Protection Regulation
                    (GDPR) to:
                  </strong>
                </p>
                <ul className="list-disc list-inside mt-4 font-light text-base">
                  <li>
                    Request information on your personal data processed by
                    layers. Upon your request, this information will be provided
                    to you electronically. You can contact us to request your
                    information at{" "}
                    <span class="email">
                      trust@layers<b>layers</b>journal<b>journal</b>.app
                    </span>
                    .
                  </li>
                  <li>
                    Gain access to your information by requesting a copy of your
                    data in a format that is readable by other companies or
                    organizations (data portability).
                  </li>
                  <li>
                    Correct your personal information in the app settings.
                  </li>
                  <li>
                    Withdraw your consent from ongoing data processing at any
                    time by deleting your account, changing your privacy
                    preferences in Settings, and/or unsubscribing from our
                    newsletter or other email communications by clicking the
                    link at the bottom of the email.
                  </li>
                  <li>
                    Request the complete deletion of your data, including all
                    past data sent to third-party services used for tracking and
                    analysis, by reaching out to{" "}
                    <span class="email">
                      trust@layers<b>layers</b>journal<b>journal</b>.app
                    </span>
                    . Your data will be deleted within 1 month.
                  </li>
                  <li>
                    Lodge a complaint with the relevant supervising authority if
                    you believe layers is processing your personal data in
                    violation of applicable data protection regulations.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  6. Data security procedures
                </h2>
                <p className="mt-4 font-light text-base">
                  Protecting your data privacy is at the core of what we do. We
                  apply security measures to protect against misuse, loss,
                  and/or alteration of personal information under our control.
                  We follow industry standards when transferring and storing
                  your data. Though we cannot ensure or guarantee that misuse,
                  loss or alteration of information will never occur, we use all
                  reasonable efforts to prevent it.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-4">
                  6.1 How layers secures your personal data
                </h3>
                <p className="mt-4 font-light text-base">
                  When you create an account with layers, your personal profile
                  data is stored on servers located in the European Union.
                </p>
                <p className="mt-4 font-light text-base">
                  When you create your layers password, it’s stored using
                  one-way encryption with both “hashing” and “salting”
                  techniques. This means your password is combined with a random
                  string of characters and then scrambled up so it’s unreadable.
                  Not even layers staff have access to your password. Doing this
                  ensures extra protection for your password. Note that if you
                  use social login to create your account (see Section 3.1.3),
                  layers does not receive your original password.
                </p>
                <p className="mt-4 font-light text-base">
                  When your data is sent between your device and our layers
                  servers, we use hypertext transfer protocol secure (HTTPS).
                  This is a type of encrypted data transmission, which scrambles
                  the information being sent so it’s unreadable. Doing this
                  increases the security of your data transfer. HTTPS is the
                  same technology used to create secure connections for your web
                  browser and is indicated by a padlock icon in the URL bar of
                  your browser.
                </p>
                <p className="mt-4 font-light text-base">
                  When you subscribe to layers premium, all your payment
                  information is securely processed by the Apple App Store.
                  layers does not store your payment information at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  7. Cookies on layersjournal.app
                </h2>
                <p className="mt-4 font-light text-base">
                  For the purpose of tracking the performances of our services
                  and to improve layers, we use cookies on our layersjournal.app
                  website. For more information on this purpose and its legal
                  basis, please see Section 3.9.
                </p>
                <p className="mt-4 font-light text-base">
                  Cookies are small text files that are intended to make the
                  website better for you to use. In general, cookies are used to
                  retain preferences, store information for things like shopping
                  carts, provide tracking data to third-party applications like
                  Google Analytics, or identify your device for special
                  advertising purposes such as retargeting.
                </p>
                <p className="mt-4 font-light text-base">
                  We use third-party analytics and tracking services to help us
                  measure the performance of our website. Whenever data is
                  transferred outside of the European Economic Area (EEA), we
                  always apply the appropriate safeguards as outlined by the
                  General Data Protection Regulation (GDPR) (see Section 4). Be
                  assured that the sensitive health data you track in the layers
                  app is never shared with or sold to advertisers. We do share a
                  minimal amount of technical data with advertising networks,
                  for example, so that you won’t see a layers ad if you’ve
                  already downloaded the app or subscribed to layers premium.
                </p>
                <p className="mt-4 font-light text-base">
                  Such third parties and services are listed below.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-4">
                  7.1 Google Analytics - Website
                </h3>
                <p className="mt-4 font-light text-base">
                  Our website uses{" "}
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    className="text-blue-500 underline"
                    target="_blank"
                  >
                    Google Analytics
                  </a>
                  , a web analysis service operated by Google LLC. (“Google”).
                  Google Analytics uses cookies (text files) stored on your
                  computer to allow for analysis of your visits to websites and
                  interactions with them in order to personalize your experience
                  and improve our services. Information produced via cookies
                  will be transferred to and stored on a server in the USA
                  operated by Google. You can find out more about Google
                  Analytics{" "}
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    className="text-blue-500 underline"
                    target="_blank"
                  >
                    here
                  </a>
                  .
                </p>
                <p className="mt-4 font-light text-base">
                  Google analyzes this information to offer reports to layers on
                  website usage and online usage of associated services. Under
                  the terms of Google’s analytics service, Google may also
                  transfer this information to third parties, either when this
                  is required by law or when third parties are contracted by
                  Google to process this data. Google must not allow your IP
                  address to be linked to any other personal data. By opting in
                  via the cookie banner on layers’ website, you consent to data
                  being used and processed by Google as described above. You can
                  withdraw consent for this use of your data at any time. Please
                  note that this withdrawal only applies to future activities.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  8. Changes to this Privacy Policy
                </h2>
                <p className="mt-4 font-light text-base">
                  layers reserves the right to amend this Privacy Policy from
                  time to time to reflect changes in the law, our data
                  collection and data use practices, the features of layers’
                  services, or advances in technology.
                </p>
                <p className="mt-4 font-light text-base">
                  Please check this page periodically for changes and refer to
                  the “last updated” date at the top of the page to know if it
                  has been revised since your last visit. If we make any changes
                  to this Privacy Policy that we consider to be material to your
                  consent, we will notify you of them.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  9. Responsibility for layers’ data processing
                </h2>
                <p className="mt-4 font-light text-base">
                  layers is made in Berlin, Germany, and the way we handle data
                  meets the high standards set by German and European Union
                  legal requirements. layers is made by layers labs UG
                  (haftungsbeschränkt), Maybachufer 11, 12047 Berlin. Please do
                  not hesitate to reach out to{" "}
                  <span class="email">
                    trust@layers<b>layers</b>journal<b>journal</b>.app
                  </span>{" "}
                  if you have any questions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  10. Prevailing language of this Privacy Policy
                </h2>
                <p className="mt-4 font-light text-base">
                  layers is used by people around the world. This wider layers
                  community accesses the layers app in a multitude of different
                  languages. Please note that we currently only have an English
                  version of this policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
