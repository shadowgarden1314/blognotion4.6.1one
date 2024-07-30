import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import { useRef, useState } from 'react'

/**
 * 留言表单
 * @returns
 */
export const MessageForm = () => {
  const formRef = useRef()
  const [success] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  //   useEffect(() => {
  //     const form = formRef.current
  //     const handleSubmit = (e) => {
  //       e.preventDefault()
  //       submitComments(formData).then(response => {
  //         console.log('Subscription succeeded:', response)
  //         // 在此处添加成功订阅后的操作
  //         setSuccess(true)
  //       })
  //         .catch(error => {
  //           console.error('Subscription failed:', error)
  //           // 在此处添加订阅失败后的操作
  //         })
  //     }
  //     form?.addEventListener('submit', handleSubmit)
  //     return () => {
  //       form?.removeEventListener('submit', handleSubmit)
  //     }
  //   }, [submitComments])

  return <>
                <h3
                className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]"
              >
                {siteConfig('STARTER_CONTACT_MSG_TITLE', null, CONFIG)}
              </h3>
              <form ref={formRef}>
    <div className="mb-[22px]">
      <label
        // for="fullName"
        className="mb-4 block text-sm text-body-color dark:text-dark-6">
        {siteConfig('STARTER_CONTACT_MSG_NAME', null, CONFIG)}*
      </label>
      <input
        disabled={success}
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Adam Gelius"
        className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
      />
    </div>
    <div className="mb-[22px]">
      <label
        // for="email"
        className="mb-4 block text-sm text-body-color dark:text-dark-6">
        {siteConfig('STARTER_CONTACT_MSG_EMAIL', null, CONFIG)}*
      </label >
      <input
        disabled={success}
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="example@yourmail.com"
        className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
      />
    </div>
    <div className="mb-[22px]">
        <label
        // for="phone"
        className="mb-4 block text-sm text-body-color dark:text-dark-6">
        {siteConfig('STARTER_CONTACT_MSG_PHONE', null, CONFIG)}*
        </label >
      <input
        disabled={success}
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="+885 1254 5211 552"
        className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
      />
    </div>
    <div className="mb-[30px]">
      <label
        // for="message"
        className="mb-4 block text-sm text-body-color dark:text-dark-6">
        {siteConfig('STARTER_CONTACT_MSG_TEXT', null, CONFIG)}*
        </label >
      <textarea
        disabled={success}
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="1"
        placeholder="type your message here"
        className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
      ></textarea>
    </div>
    <div className="mb-0">
      <button
        disabled={success}
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-blue-dark"
      >
        {siteConfig('STARTER_CONTACT_MSG_SEND', null, CONFIG)}
      </button>
        {/* Success message */}
        {success && <p className="mt-2 text-green-600 text-sm">{siteConfig('STARTER_CONTACT_MSG_THANKS', null, CONFIG)}</p>}

    </div>
  </form>
              </>
}
