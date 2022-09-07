import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { hexToRgbA } from '../../../other/helpers'
import { Maybe, useCourseByIdLazyQuery, useCourseProgramByIdQuery } from '../../../other/generated'

type CourseThemeBlockProps = {
  color: string
  programId: Maybe <number | undefined>
}

const TopicsBlock = styled.div`
  max-height: 300px;
  overflow: auto;
  padding: 0.75rem 1.25rem 0.75rem;
  display: grid;
  
  grid-template-columns: auto 1fr auto;
  grid-gap: 0.5rem 0.3rem;
`
type TTopic = {
  name: string
  hours: number
}

const CourseTopicsBlock: React.FC <CourseThemeBlockProps> = ({ color, programId }) => {
  const [ topics, setTopics ] = useState<TTopic[]>([])
  
  if (programId) {
    const { data } = useCourseProgramByIdQuery({ variables: { programId: programId } })
  
    useEffect(() => {
      const text = data?.program.topics
      if (typeof text === 'string') {
        setTopics(JSON.parse(text))
      }
    }, [ data ])
    
    return (
      <TopicsBlock>
        {
          topics.map((topic, index) => (
            <React.Fragment key={topic.name}>
              <span>{index + 1}.</span>
              <span>{topic.name}</span>
              <span>{topic.hours} ч.</span>
            </React.Fragment>
          ))
        }
      </TopicsBlock>
    )
  }
  return (
    <TopicsBlock color={color}>
        Нет тем...😢
    </TopicsBlock>
  )
}

export default CourseTopicsBlock