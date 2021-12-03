// @ts-nocheck
import React from 'react'
import { Form, Input } from 'antd'
import constants from '../../../helpers/constants'
import FormTitle from './FormTitle'
import ButtonSubmit from '../../../buttons/ButtonSubmit'

import './style.css'

function FormHome () {
  return (
    <Form
      className={ constants.form.form }
      name="basic"
      initialValues={ {
        remember: true,
      } }>
      <FormTitle />

      <Form.Item
        className={ constants.form.formInput }
        name="username"
        rules={ [
          {
            required: true,
            message: 'Please input your username!',
          },
        ] }>
        <Input className={ constants.form.input } />
      </Form.Item>

      <Form.Item className={ constants.form.formBtn }>
        <ButtonSubmit />
      </Form.Item>
    </Form>
  )
}

export default FormHome;