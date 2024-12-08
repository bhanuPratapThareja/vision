import { Box, Button, TextField } from '@mui/material'
import { Formik } from 'formik'
import useMediaQuery from '@mui/material/useMediaQuery'

import PageHeading from '../shared/PageHeading'
import { userFormInitialValues, userSchema } from '../schemas/user-form-schema'

export default function Form() {
  const isNonMobile = useMediaQuery('(min-width:600px)')

  const handleFormSubmit = (values, setSubmitting, resetForm) => {
    console.log('values: ', values)
    setTimeout(() => {
      setSubmitting(false)
      console.log('submitted')
      resetForm()
    }, 2000);
  }

  return (
    <Box m="20px">
      <PageHeading title="Create User" subTitle="Create a new User Profile" />

      <Formik
        initialValues={userFormInitialValues}
        validationSchema={userSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleFormSubmit(values, setSubmitting, resetForm)
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
          return (
            <form onSubmit={handleSubmit} noValidate>
              <Box 
                display="grid" 
                gap="30px" 
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                mt="12px"
                sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" } }}
              >
                <TextField 
                  fullWidth
                  variant='filled'
                  type='text'
                  name='firstName'
                  label='First Name'
                  value={values.firstName}
                  error={touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField 
                  fullWidth
                  variant='filled'
                  type='text'
                  name='lastName'
                  label='Last Name'
                  value={values.lastName}
                  error={touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField 
                  fullWidth
                  variant='filled'
                  type='email'
                  name='email'
                  label='Email'
                  value={values.email}
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField 
                  fullWidth
                  variant='filled'
                  type='text'
                  name='contact'
                  label='Contact Number'
                  value={values.contact}
                  error={touched.contact && !!errors.contact}
                  helperText={touched.contact && errors.contact}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField 
                  fullWidth
                  variant='filled'
                  type='text'
                  name='address1'
                  label='Address 1'
                  value={values.address1}
                  error={touched.address1 && !!errors.address1}
                  helperText={touched.address1 && errors.address1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField 
                  fullWidth
                  variant='filled'
                  type='text'
                  name='address2'
                  label='Address 2'
                  value={values.address2}
                  error={touched.address2 && !!errors.address2}
                  helperText={touched.address2 && errors.address2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="20px" >
                <Button type="submit" color="secondary" disableElevation variant="contained" disabled={isSubmitting}>
                  Create New User
                </Button>
              </Box>
            </form>
          )
        }}
      </Formik>
    </Box>
  )
}
