import mongoose from 'mongoose';

const selectSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    selectItems: [
      {
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],

    paymentMethod: { type: String, required: true },
    paymentResult: { id: String, status: String, email_address: String },
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, required: true, default: false },
    isDownloaded: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    downloadedAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Select = mongoose.models.Select || mongoose.model('Select', selectSchema);
export default Select;
