
export type TimeSlots = {
    Time: string;
    Capacity: number;
    OriginalCapacity: number;
}

type TimeSlotsData = {
   Status: string;
   Message: string;
   Data: TimeSlots[];
}

export const getTimeSlots = async (): Promise<TimeSlotsData> => {
    const mockData = [
        {
           "Time":"00:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"01:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"02:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"03:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"04:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"05:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"06:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"07:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"08:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"09:00",
           "Capacity":1,
           "OriginalCapacity":2
        },
        {
           "Time":"10:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"11:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"12:00",
           "Capacity":0,
           "OriginalCapacity":2
        },
        {
           "Time":"13:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"14:00",
           "Capacity":1,
           "OriginalCapacity":2
        },
        {
           "Time":"15:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"16:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"17:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"18:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"19:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"20:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"21:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"22:00",
           "Capacity":2,
           "OriginalCapacity":2
        },
        {
           "Time":"23:00",
           "Capacity":2,
           "OriginalCapacity":2
        }
    ];
    return new Promise<TimeSlotsData>((resolve) => {
        setTimeout(() => {
            resolve({
            Status: "OK",
            Message: "OK",
            Data: mockData,
            });
        }, 1000);
    });
}