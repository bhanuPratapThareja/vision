import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction" 
import listPlugin from '@fullcalendar/list'
import { formatDate } from '@fullcalendar/core'
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme
} from '@mui/material'

import PageHeading from '../shared/PageHeading'
import { themeTokens } from '../theme/theme'

export default function Calendar() {
  const theme = useTheme()
  const colors = themeTokens(theme.palette.mode)
  const [currentEvents, setCurrentEvents] = useState([])

  const handleDateClick = selected => {
    const title = prompt('Please enter a new title for you event')
    const calendarApi = selected.view.calendar
    calendarApi.unselect()
    if(title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      })
    }
  }

  const handleEventClick = selected => {
    if(window.confirm(`Are you sure you want to delete the event ${selected.event.title}`)) {
      selected.event.remove()
    }
  }

  return (
    <Box m="20px">
      <PageHeading title="CALENDAR" subTitle="Full Calender Interactive Page" />

      <Box display="flex" justifyContent="space-between">

        {/* Calendar Sidebar */}
        <Box flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p={2}
          borderRadius="4px"
        >
         <Typography variant='h5'>Events</Typography> 

          {/* Events */}
          <List>
            {currentEvents.map(event => {
              return (
                <ListItem
                  key={event.id}
                  sx={{ backgroundColor: colors.secondary[500], margin: '10px 0', borderRadius: '2px' }}
                >
                  <ListItemText 
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}
                      </Typography>
                    }
                  />
                </ListItem>
              )
            })}
          </List>

          {/* Calendar */}
        </Box>

        <Box flex="1 1 100%" ml={2}>
          <FullCalendar 
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
            ]}
            headerToolbar={{
              left: "prev next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              initialView: "dayGridMonth",
            }}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={events => setCurrentEvents(events)}
            initialEvents={[
              { id: '1', title: 'All day event', date: '2024-11-18' },
              { id: '2', title: 'Timed event', date: '2024-11-19' },
            ]}
          />
        </Box>
      </Box>
          <style>{`
            .fc .fc-list-day {
              color: ${colors.blueAccent[500]}
            }
          `}</style>
    </Box>
  )
}
