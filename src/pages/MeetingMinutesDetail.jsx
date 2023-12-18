// 필요한 모듈 불러오기
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TextBox from '@/components/TextBox';
import TitleTextBox from '@/components/TitleTextBox';
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContext';
const userName = '쌔삭전사';

function MeetingMinutesDetail() {
  const [meetingMinutes, setMeetingMinutes] = useState([]);
  const [formattedDate, setFormattedDate] = useState('');
  const { userId, projectId, setProjectId } = useContext(UserContext);

  const { meetingId } = useParams();

  const meeting = meetingMinutes.find((data) => data.meetingId == meetingId);

  useEffect(() => {
    if (meeting && meeting.meetingDate) {
      const date = new Date(meeting.meetingDate);
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      };
      const formatter = new Intl.DateTimeFormat('ko-KR', options);
      setFormattedDate(formatter.format(date));
    }
  }, [meeting]);

  useEffect(() => {
    axios
      .get('http://43.201.85.197/meeting/', {
        params: { projectId: projectId },
      })
      .then((response) => {
        setMeetingMinutes(response.data);
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
      });
  }, [meetingId]);

  return (
    <section className="flex flex-col gap-6 pb-4">
      {meeting && (
        <>
          <TitleTextBox
            title={formattedDate}
            sub={`${userName}님을 위해 AI가 회의를 요약했어요`}
          />
          <TextBox
            summary={'회의 요약'}
            content={meeting.summary.split('-').map((line, index) =>
              index == 0 ? (
                ''
              ) : (
                <span key={index}>
                  {index !== 0 && '-'}
                  {line}
                  <br />
                </span>
              )
            )}
          />
          <TextBox summary={'회의 내용'} content={meeting.meetingContent} />
        </>
      )}
    </section>
  );
}

export default MeetingMinutesDetail;
