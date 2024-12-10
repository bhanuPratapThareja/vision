import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../components/LineChart";
import GeographyChart from "../components/GeographyChart";
import BarChart from "../components/BarChart";
import StatBox from "../components/StatBox";
import ProgressCircle from "../components/ProgressCircle";

import { mockTransactions, mockGeographyData, mockBarData, mockLineData } from "../data/mockData";
import { geoFeatures } from "../data/mockGeoFeatures";
import { themeTokens } from "../theme/theme";
import PageHeading from "../shared/PageHeading";

import { faker } from "@faker-js/faker";
import { useAddUserMutation, useFetchUserQuery, useDeleteUserMutation, userActions } from '../store'

const Dashboard = () => {
  let userId;
  const dispatch = useDispatch()
  const theme = useTheme();
  const colors = themeTokens(theme.palette.mode);

  const [addUser, results] = useAddUserMutation()
  const [deleteUser, deleteResults] = useDeleteUserMutation()

  console.log('deleteResults: ', deleteResults)

  // const { data, isLoading, isError } = useFetchUserQuery(userId)
  // console.log('fetched data: ', data)

  const onAddUser = () => {
    const user = {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      city: faker.location.city(),
      state: faker.location.state(),
      country: faker.location.country(),
      occupation: faker.person.jobTitle(),
      phoneNumber: faker.phone.number({ style: 'national'}),
      transactions: [],
      role: 'admin'
    }
    addUser(user)
      // .then(res => {
      //   // console.log('add user res: ', res)
      //   dispatch(userActions.setUserId(res.data.user.id))
      // })
      // .catch(err => console.log('add user err: ', err))
      // .finally(() => console.log('finally'))
  }

  const onDeleteUser = () => {
    deleteUser('6757bfb2775bcd2c69bc3d9d')
  }

  return (
    <Box m="20px">
      {/* HEADER */}
      
      <Box display="flex" justifyContent="space-between" alignItems="center" my={4}>
        <PageHeading title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              // backgroundColor: theme.palette.[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={onDeleteUser}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}

        {/* ROW 1 */}
      <Box
        display="flex"
        gap={4}
        flexWrap="wrap"
        minWidth="150px"
      >
        <Box
          flex={1}
          backgroundColor={colors.primary[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={2}
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.secondary[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
         flex={1}
          backgroundColor={colors.primary[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={2}
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.secondary[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
         flex={1}
          backgroundColor={colors.primary[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={2}
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.secondary[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          flex={1}
          backgroundColor={colors.primary[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={2}
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.secondary[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

      </Box>


        {/* ROW 2 */}
      <Box>
        
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[600]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.secondary[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.secondary[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart data={mockLineData} isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[600]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.secondary[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.secondary[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

      </Box>

        {/* ROW 3 */}
      <Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[600]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="150px" />
            <Typography
              variant="h5"
              color={colors.secondary[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[600]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart data={mockBarData} isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[600]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart data={mockGeographyData} geoFeatures={geoFeatures} isDashboard={true} />
          </Box>
        </Box>
      </Box>

    </Box>
  );
};

export default Dashboard;