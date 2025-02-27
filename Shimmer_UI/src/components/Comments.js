import React from 'react';
import { CommentBox } from './CommentBox';

const data = [
    {
        username: "Alok",
        comment: "kjewbncwuywgfcygweiucfw",
        replies: [
            {
                username: "surbhi",
                comment: "kjewbncwuywgfcygweiucfwsiufc",
                replies: [
                    {
                        username: "surbhi",
                        comment: "kjewbncwuywgfcygweiucfwsiufc",
                        replies: [{}]
                    }
                ]
            }
        ]
    },
    {
        username: "ravi",
        comment: "kjewbncwuywgfcygweiucfw",
        replies: [
            {
                username: "sorabh",
                comment: "kjewwuywgfcygweiucfwsiufc",
                replies: [
                    {
                        username: "dravid",
                        comment: "kjewbncwuywgfcygweiucfwsiufc",
                        
                            replies: [
                                {
                                    username: "dravid1",
                                    comment: "kjewwuywgfcygweiucfwsiufc",
                                    replies: [
                                        {
                                            username: "dravid2",
                                            comment: "kjewbncwuywgfcygweiucfwsiufc",
                                            replies: [{}]
                                        }
                                    ]
                                }
                            ]
                        
                    }
                ]
            }
        ]
    },
    {
        username: "vijay",
        comment: "kjewbncwuywgfcygweiucfw"
    },
    {
        username: "katan",
        comment: "kjewbncwuywgfcygweiucfw"
    }
]

export const Comments = () => {
  return (
    <div>
        <CommentBox data={data} />
    </div>
  )
}
