export default function Table() {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden ">
            <table className="table-fixed min-w-full divide-y divide-gray-200 ">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-start   ">
                    Transaction ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-start  ">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-start  ">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-start   ">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-6 whitespace-nowrap bg-gray-100">#39201</td>
                  <td className="p-6 whitespace-nowrap bg-gray-100">06/15/2021</td>
                  <td className="p-6 whitespace-nowrap bg-gray-100">$1000.99</td>
                  <td className="p-6 whitespace-nowrap bg-gray-100">
                    <span className="font-semibold text-yellow-600">Pending</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-6 whitespace-nowrap bg-gray-100">#38594</td>
                  <td className="p-6 whitespace-nowrap bg-gray-100">05/15/2021</td>
                  <td className="p-6 whitespace-nowrap bg-gray-100">$2000.99</td>
                  <td className="p-6 whitespace-nowrap bg-gray-100">
                    <span className="font-semibold text-green-600">Paid</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-6 whitespace-nowrap bg-gray-100">#38223</td>
                  <td className="p-6 whitespace-nowrap bg-gray-100">04/15/2021</td>
                  <td className="p-6 whitespace-nowrap bg-gray-100">$1230.42</td>
                  <td className="p-6 whitespace-nowrap bg-gray-100">
                    <span className="font-semibold text-green-600">Paid</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
