// @ts-nocheck
import React from 'react'
import { Form, Input } from 'antd'
import FormTitle from './FormTitle'
import ButtonSubmit from '../../../buttons/ButtonSubmit'

import './style.css'

function FormHome () {
  return (
    <Form
      className="form"
      name="basic"
      initialValues={ {
        remember: true,
      } }>
      <FormTitle />

      <Form.Item
        className="form__inp"
        name="username"
        rules={ [
          {
            required: true,
            message: 'Please input your username!',
          },
        ] }>
        <Input className="input" />
      </Form.Item>

      <Form.Item className="form__btn">
        <ButtonSubmit />
      </Form.Item>
    </Form>
  )
}

export default FormHome;