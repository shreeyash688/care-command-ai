/**
 * POST /api/analysis - Submit or store analysis data.
 * Expects body: { patientId?, type?, result?, ... }
 */
export const createAnalysis = async (req, res, next) => {
  try {
    const payload = req.body;
    if (!payload || Object.keys(payload).length === 0) {
      const error = new Error('Request body is required for analysis');
      error.statusCode = 400;
      return next(error);
    }
    // Return the submitted analysis payload (extend later with DB model if needed)
    res.status(201).json({
      success: true,
      data: { ...payload, submittedAt: new Date().toISOString() },
    });
  } catch (error) {
    next(error);
  }
};
