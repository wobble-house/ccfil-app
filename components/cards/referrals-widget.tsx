export default function ReferralsWidget({approved, declined, undetermined, total}:{approved, declined, undetermined, total}){
    return(
        <div className='flex flex-col bg-white bg-opacity-75 border-grey-100 pt-2 rounded-lg max-w-sm w-full p-10 mx-auto'>
        <table className="relative inline rounded-lg w-full">
          <tbody className="w-full flex flex-col mx-auto">
          <tr className={`relative grid grid-flow-row grid-cols-3 bg-blue2 text-white items-center justify-between rounded-t-lg`}>
            <th className="admit justify-center items-center h-full border-blue1 border-l text-center font-bold text-xs ">Approved</th>
            <th className="admit justify-center items-center h-full border-blue1 border-l text-center font-bold text-xs ">Declined</th>
            <th className="admit justify-center items-center h-full border-blue1 border-l text-center font-bold text-xs ">Undetermined</th>
            </tr>
            <tr className={`grid grid-cols-3 w-full odd:bg-gray-100 even:bg-gray-300 border-b p-2`}>
                <td className={`flex flex-row align-middle items-center gap-4 text-4xl font-bold text-green-800 text-center justify-center`}>{approved}</td>
                <td className={`flex flex-row align-middle items-center gap-4 text-4xl font-bold text-red-500 text-center justify-center`}>{declined}</td>
                <td className={`flex flex-row align-middle items-center gap-4 text-4xl font-bold text-yellow-500 text-center justify-center`}>{undetermined}</td>
            </tr>
            <tr className={`relative flex flex-row w-full odd:bg-gray-100 even:bg-gray-300 justify-center h-20 items-center rounded-b-lg overflow-auto align-middle content-center`}>
                <td>Total Referrals:</td>
                <td>{total}</td>
            </tr>
            </tbody>
      </table>
      </div>
    )
};