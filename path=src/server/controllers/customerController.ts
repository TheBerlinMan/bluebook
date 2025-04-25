export async function createCustomer(request: NextRequest) {
  try {
    await connectDB();

    // remove orderStatus from the client payload
    const { firstName, lastName, address, message, images, domesticShipping, willPayShipping } = await request.json();

    // Mongo will apply its default 'pending' to orderStatus
    const customer = await CustomerModel.create({
      firstName,
      lastName,
      address,
      message,
      images,
      domesticShipping,
      willPayShipping,
    });

    return NextResponse.json(customer);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create customer" }, { status: 500 });
  }
} 